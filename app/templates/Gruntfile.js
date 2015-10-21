module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('serve', ['wiredep', 'connect:livereload', 'watch']);

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
      files: ['*.html', 'js/*.js', 'css/*.css'],
      options: {
        livereload: true,
      },
    },

    wiredep: {
      all: {
        src: ['index.html']
      }
    }
  });
};
