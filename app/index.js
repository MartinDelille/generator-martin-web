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
        this.templatePath('index.jade'),
        this.destinationPath('index.jade'),
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
    this.fs.copyTpl(
        this.templatePath('wdio.conf.js'),
        this.destinationPath('wdio.conf.js')
        );
    this.fs.copyTpl(
        this.templatePath('features/program.feature'),
        this.destinationPath('features/program.feature'),
        { appname: slug(this.appname) }
        );
    this.fs.copyTpl(
        this.templatePath('features/program_steps.js'),
        this.destinationPath('features/program_steps.js')
        );
  },
  install: function() {
    this.npmInstall();
    this.bowerInstall();
  }
});
