'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('pyGAE') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
 	  this.fs.copy(
		this.templatePath('_app.yaml'),
		this.destinationPath('app.yaml')
	  );
    },

	pythonapp: function () {
	  var prefix = 'app';
 	  this.copy('__init__.py', path.join(prefix, '__init__.py'));
    },

	assets: function() {
	  
	  var prefix = 'assets';

 	  this.copy('gulpfile.js', path.join(prefix, 'gulpfile.js'));
	  this.fs.copy(
		this.templatePath('_package.json'),
        this.destinationPath(path.join(prefix, 'package.json'))
      );
	  this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath(path.join(prefix, 'bower.json'))
      );
	},

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
	this.log(yosay(
	  'Now ' + chalk.green('cd ./assets') + ' and run ' + chalk.green('npm install ; bower install')
    ));
  }
});
