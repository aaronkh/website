const ghpages = require('gh-pages')

ghpages.publish('build', { dotfiles: true, repo: "git@github.com:aaronkh/aaronkh.github.io.git" }, () => { })
