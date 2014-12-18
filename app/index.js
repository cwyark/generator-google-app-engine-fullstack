'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var gruntfile = require('gruntfile-editor');



var GAEFullstackGenerator = yeoman.generators.Base.extend({
  	initializing: function () {
    	this.pkg = require('../package.json');
  	},
	
	info: function() {
		this.log(yosay('Welcome to the GAE with Python Fullstack generator!'));
	},

  	python_prompts: function () {
    	var done = this.async();
		this.prompt([
		{
			type: 'input',
			name: 'app_id',
			message: 'What is your Google App Engine Application ID?',
			default: path.basename(process.cwd())
		}, {
			type: 'list',
			name: 'PyFramework',
			message: 'Which python framework do you want to use?',
			choices:['flask','webapp2','bottle'],
		}], function (props) {
			this.app_id 				= props.app_id;
			this.PyFramework 			= props.PyFramework;
			done();
		}.bind(this));
  	},

	ui_prompts: function () {
    	var done = this.async();
		this.prompt([
		{
			type: 'confirm',
			name: 'Compass',
			message: 'Do you want to use Compass?',
			default: false
		}, {
			type: 'list',
			name: 'UiFramework',
			message: 'Which UI framework do you want to use?',
			choices: ['bootstrap', 'Foundation', 'Semantic', 'None'],
		}], function (props) {
			this.UiFramework = props.UiFramework;
			this.compass = props.compass;
			done();
		}.bind(this));
  	},

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('lib');
      this.dest.mkdir('templates');
      this.dest.mkdir('static');
	  this.src.copy('appengine_config.py','appengine_config.py');
	  this.src.copy('Gruntfile.js','Gruntfile.js');
	  this.src.copy('bowerrc.json','.bowerrc');
	  this.src.copy('gitignore','.gitignore');
	  this.src.copy('pyweb/' + this.PyFramework + '_entry.py','main.py');
	  this.template('_app.yaml', 'app.yaml');
	  /* pip's requirements config */

	  this.template('_requirements.txt', 'requirements.txt');
	  this.template('_bower.json', 'static/bower.json');
	  this.template('_package.json', 'package.json');
    },
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = GAEFullstackGenerator;
