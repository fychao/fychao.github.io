// vue.config.js - set publicPath for deployment
// For a user/organization site (https://<USERNAME>.github.io/) keep '/' (default).
// For a project site (https://<USERNAME>.github.io/<REPO>/) set publicPath to '/<REPO>/'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // change to '/<REPO>/' if deploying to a project page
    : '/'
}
