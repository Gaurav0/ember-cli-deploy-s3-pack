/* jshint node:true */
var RSVP = require('rsvp');

// For details on each option run `ember help release`
module.exports = {
  local: true,
  remote: 'origin',
  annotation: "Release %@",
  message: "Bumped version to %@",
  manifest: [ 'package.json', 'bower.json' ],
  strategy: 'semver',
  format: 'YYYY-MM-DD',
  timezone: 'America/Los_Angeles',
  publish: "true"
  
  beforeCommit: function(project, versions) {
    return new RSVP.Promise(function(resolve, reject) {
      // Do custom things here...
    });
  }
};
