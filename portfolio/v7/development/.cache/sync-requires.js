const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-index-js": hot(preferDefault(require("/home/otacon424/Documents/github/portfolio/v7/development/src/pages/404/index.js"))),
  "component---src-pages-about-index-it-js": hot(preferDefault(require("/home/otacon424/Documents/github/portfolio/v7/development/src/pages/about/index.it.js"))),
  "component---src-pages-about-index-js": hot(preferDefault(require("/home/otacon424/Documents/github/portfolio/v7/development/src/pages/about/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/otacon424/Documents/github/portfolio/v7/development/src/pages/index.js"))),
  "component---src-pages-tag-index-js": hot(preferDefault(require("/home/otacon424/Documents/github/portfolio/v7/development/src/pages/tag/index.js"))),
  "component---src-templates-archive-archive-js": hot(preferDefault(require("/home/otacon424/Documents/github/portfolio/v7/development/src/templates/archive/archive.js"))),
  "component---src-templates-post-post-js": hot(preferDefault(require("/home/otacon424/Documents/github/portfolio/v7/development/src/templates/post/post.js"))),
  "component---src-templates-tag-tag-js": hot(preferDefault(require("/home/otacon424/Documents/github/portfolio/v7/development/src/templates/tag/tag.js")))
}

