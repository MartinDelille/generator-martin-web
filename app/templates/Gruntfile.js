module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', ['connect:livereload', 'watch']);

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
    }
  });
};
