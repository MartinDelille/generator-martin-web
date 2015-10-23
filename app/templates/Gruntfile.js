module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bootlint');

  grunt.registerTask('serve', ['wiredep', 'jshint', 'bootlint', 'connect:livereload', 'watch']);

  grunt.initConfig({
    connect: {
      livereload: {
        options: {
          open: true,
          livereload: true
        }
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      html: {
        files: ['*.html'],
        tasks: ['bootlint']
      },
      js: {
        files: ['Gruntfile.js', 'js/*.js']
      },
      css: {
        files: ['css/*.css']
      },
      options: {
        livereload: true,
      },
    },

    wiredep: {
      all: {
        src: ['index.html']
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    },

    bootlint: {
      options: {
        stoponerror: false,
      },
      files: ['*.html']
    }
  });
};
