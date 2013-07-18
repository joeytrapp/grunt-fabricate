module.exports = function(grunt) {
  var Fabricate = require('fabricate'),
      desc = 'Uses mincer to build dependencies and apply engines, and then uses uglify to concat and produce source map';

  grunt.registerMultiTask('fabricate', desc, function() {
    var options  = this.data,
        done     = this.async();

    new Fabricate(options).build(function(err) {
      grunt.log.write('Created ' + options.dest.cyan + "\n");
      done();
    });
  });
};
