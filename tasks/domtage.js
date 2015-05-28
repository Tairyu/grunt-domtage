'use strict';

var path = require('path');
var Domtage = require('domtage');

module.exports = function (grunt) {

  grunt.registerMultiTask('domtage', 'generate html-files with domtage', function () {

    var opts = this.options();
    var recipe = this.data.recipe;

    if(!recipe) {
      if(this.filesSrc.length === 0) {
        grunt.log.errorlns('Could not find any recipe files.');
        return;
      }

      recipe = this.filesSrc.map(function(src){
        var ext = path.extname(src);
        if(ext === '.json') {
          return grunt.file.readJSON(src);
        }
        else if(ext === '.yml' || ext === '.yaml') {
          return grunt.file.readYAML(src);
        }
        else {
          grunt.fail.warn(src + 'is could not use format. recipe file must JSON or YAML.');
        }
      });
    }

    new Domtage(opts, recipe).generate();
    grunt.log.ok('all recipes complete.');
  });
};