module.exports = function (grunt) {
  pkg: grunt.file.rendJSON('package.json')
  grunt.initConfig({

  })
}

grunt.loadNpmTasks('grunt-contrib-jshint')

grunt.registerTask('default', [''])