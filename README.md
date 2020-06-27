How deploy?
-----
1. Make the following changes: in 404.html `let segmentCount = 1` ➡ `let segmentCount = 0`, in App.js `<Router basename="website">` ➡ `<Router>`, in .env.production `REACT_APP_RELATIVE_PATH=https://aaronkh.github.io/website` ➡ `REACT_APP_RELATIVE_PATH=https://aaronkh.github.io/`, `"homepage": "https://aaronkh.github.io/website"`➡ `"homepage": "https://aaronkh.github.io/"`
2. `npm run build`
3. Push `/build/` to `aaronkh.github.io`
