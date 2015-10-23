var slug = require('slug');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function() {
    this.fs.copyTpl(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
        );
    this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { appname: slug(this.appname) }
        );
    this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
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
    this.fs.copyTpl(
        this.templatePath('js/app.js'),
        this.destinationPath('js/app.js')
        );
    this.fs.copyTpl(
        this.templatePath('css/app.css'),
        this.destinationPath('css/app.css')
        );
  },
  install: function() {
    this.npmInstall();
    this.bowerInstall();
  }
});
