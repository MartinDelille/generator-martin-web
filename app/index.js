var slug = require('slug');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function() {
    this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { appname: slug(this.appname) }
        );
    this.fs.copyTpl(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
        );
    this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('index.html'),
        { appname: slug(this.appname) }
        );
  },
  install: function() {
    this.npmInstall();
  }
});
