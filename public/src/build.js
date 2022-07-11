const fs = require("fs");
const path = require("path");

function walk(dir) {
    return new Promise((resolve, _) => {
        fs.readdir(dir, (_, files) => {
            Promise.all(files.map((file) => {
                return new Promise((resolve, _) => {
                    const filepath = path.join(dir, file);
                    fs.stat(filepath, (_, stats) => {
                        if (stats.isDirectory()) {
                            walk(filepath).then(resolve);
                        } else if (stats.isFile()) {
                            resolve(filepath);
                        }
                    });
                });
            }))
                .then((foldersContents) => {
                    resolve(foldersContents.reduce((all, folderContents) => all.concat(folderContents), []));
                });
        });
    });
}


async function buildNotes() {
    const tags = {}
    const months = {}
    const titles = {}

    fs.mkdirSync(path.resolve(__dirname, '..', 'build', 'notes'), { recursive: true })
    const paths = await walk(path.resolve(__dirname, 'notes'))
    for (const p of paths) {
        if (!p.endsWith('.json')) continue
        const data = fs.readFileSync(p)
        fs.writeFileSync(path.resolve(__dirname, '..', 'build', 'notes', path.parse(p).base), data, {flag: 'w+'})
        const json = JSON.parse(data)
        titles[json.title] = p

        for (const tag in json.tags) {
            if (tag in tags) {
                tags[tag].push(p)
            } else {
                tag[tags] = [p]
            }
        }
        const month = (new Date(json.timestamp * 1000)).toISOString().substring(0, 7)
        if (month in months) {
            months[month].push(p)
        } else {
            months[month] = [p]
        }
    }
    fs.writeFileSync(path.resolve(__dirname, '..', 'build', 'notes', '__tags.json'), JSON.stringify(tags))
    fs.writeFileSync(path.resolve(__dirname, '..', 'build', 'notes', '__months.json'), JSON.stringify(months))
    fs.writeFileSync(path.resolve(__dirname, '..', 'build', 'notes', '__titles.json'), JSON.stringify(titles))
}


fs.rmdirSync(path.resolve(__dirname, '..', 'build'), { recursive: true, force: true })
buildNotes()
