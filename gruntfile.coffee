module.exports = (grunt) ->
  require('jit-grunt') grunt

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    clean:
      dist: 'samples/dist'

    domtage:
      options:
        srcDir: 'samples/src'
        destDir: 'samples/dist'
      example:
        recipe: [
          {
            name: 'index'
            layouts: [
              { header: 'header/default' }
              { footer: 'footer/default' }
              { '#content': 'index/content' }
              { 'ul.side-panel': 'index/side-panel' }
            ]
            patterns: [
              {
                name: 'index2'
                layouts: [
                  { '.sign-in': 'header/sign-up' }
                ]
              }
              {
                name: 'index2/no-replace'
              }
            ]
          }
        ]
      fromFiles:
        options:
          destDir: 'samples/dist/fromFiles'
        src: [
          'samples/src/build.json',
          'samples/src/build.yml',
          #'samples/src/build.txt'
        ]

  grunt.loadTasks 'tasks'

  grunt.registerTask 'default', ['clean', 'domtage']
