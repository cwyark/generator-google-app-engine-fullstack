'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var GAEFullstackGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the GAE with Python Fullstack generator!'
    ));

    var prompts = [{
		type: 'input',
		name: 'app_id',
		message: 'What is your Google App Engine Application ID?',
		default: path.basename(process.cwd())
	}, {
		type: 'list',
      	name: 'Python Framework',
      	message: 'Which python framework do you want to use?',
	  	choices:['Flask','Webapp2','Bottle'],
    }, {
		type: 'input',
		name: 'glcoud',
		message: 'Where is your google cloud platform SDK path?',
		default: '~/google-cloud-sdk/'
	}, {
		type: 'comfirm',
		name: 'compass',
		message: 'Do you want to use Compass?',
		default: false
	}, {
		type: 'list',
		name: 'ui_framework',
		message: 'Which UI framework do you want to use?',
		choices: ['bootstrap', 'Foundation', 'Semantic', 'None']
	}];

    this.prompt(prompts, function (props) {
		this.someOption = props.someOption;
		done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('app/templates');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = GAEFullstackGenerator;
