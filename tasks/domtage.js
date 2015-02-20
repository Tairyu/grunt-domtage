'use strict';

var Domtage = require('domtage');

module.exports = function (grunt) {

  grunt.registerMultiTask('domtage', 'generate html-files with domtage', function () {

    var opts = this.options();
    Domtage(opts, this.data.recipes).generate();
    grunt.log.ok('all recipes complete.');
  });
};