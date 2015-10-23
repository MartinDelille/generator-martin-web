module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-bootlint');

  grunt.registerTask('serve', ['wiredep', 'bootlint', 'connect:livereload', 'watch']);

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

    bootlint: {
      options: {
        stoponerror: false,
      },
      files: ['*.html']
    }
  });
};
