const ghpages = require('gh-pages')

ghpages.publish('build', { dotfiles: true }, () => { })
