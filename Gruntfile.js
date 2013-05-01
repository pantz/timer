/*global module:false*/
module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg : '<json:package.json>',
	meta: {
		version: '0.1.0',
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'* <%= pkg.homepage %>\n' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
		'<%= pkg.author %>;*/'
	},
	concat: {
		alltrack : {
			src : ['underscore*.js', 'json2.js', '*.js', '!Gruntfile.js', '!less*.js'],
			dest : 'build/alltrack.js'
		}
	},
	jshint : {
		options: {
			jshintrc: '.jshintrc'
		},
		all : ['static/*.js', '../tests/*.js']
	},
	uglify: {
		alltrack : {
			files: {
				'min/alltrack.js': ['build/alltrack.js']
			}
		}
	},
	less : {
		testing : {
			options : {
				compress:false
			},
			files : {
				'../css/alltrack.css' : '../less/screen.less'
			}
		},
		production : {
			options : {
				compress:true,
				yuicompress:true,
				dumpLineNumbers:"all"
			},
			files : {
				'../css/alltrack.min.css' : '../less/screen.less'
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-jshint');

// Default task.
grunt.registerTask('default', ['concat','uglify','jshint','less']);

};
