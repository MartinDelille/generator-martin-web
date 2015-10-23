module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-bootlint');

  grunt.registerTask('serve', ['wiredep', 'jshint', 'htmlhint', 'bootlint', 'connect:livereload', 'watch']);

  var port = 9000;

  grunt.initConfig({
    connect: {
      livereload: {
        options: {
          port: port,
          open: true,
          livereload: port + 1
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
        tasks: ['htmlhint', 'bootlint']
      },
      js: {
        files: ['Gruntfile.js', 'js/*.js']
      },
      css: {
        files: ['css/*.css']
      },
      options: {
        livereload: port + 1,
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

    htmlhint: {
      all: {
        options: {
          "tag-pair": true
        },
        src: ['*.html']
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
