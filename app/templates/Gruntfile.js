module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-bootlint');

  grunt.registerTask('serve', ['wiredep', 'jshint', 'htmlhint', 'htmllint', 'csslint', 'bootlint', 'connect:livereload', 'watch']);

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
        tasks: ['htmlhint', 'htmllint', 'bootlint']
      },
      js: {
        files: ['Gruntfile.js', 'js/*.js'],
        tasks: ['jshint']
      },
      css: {
        files: ['css/*.css'],
        tasks: ['csslint']
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
      options: {
        force: true
      },
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

    htmllint: {
      all: {
        options: {
          force: true
        },
        src: ['*.html']
      }
    },

    csslint: {
      all: {
        src: ['css/*.css']
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
