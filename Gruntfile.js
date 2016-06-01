'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-sass');

    var importOnce = require('node-sass-import-once');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            playground: {
                port: 9001
            }
        },

        sass: {
            options: {
                outputStyle: 'expanded',
                sourceComments: true,
                includePaths: [
                    'sass/',
                    'node_modules/'
                ],
                importer: importOnce,
                importOnce: {
                    index: false,
                    css: false
                },
                indentWidth: 4
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: [
                        '**/*.scss',
                        '!node_modules/**/*.scss'
                    ],
                    dest: 'build/css',
                    ext: '.css',
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['iOS >= 6.0', 'Android >= 2.3', 'last 4 ChromeAndroid versions']
            },
            multiple_files: { // eslint-disable-line camelcase
                flatten: true,
                src: 'build/css/*.css'
            }
        },

        requirejs: {
            compile: {
                options: {
                    almond: true,
                    mainConfigFile: './js/config.js',
                    optimize: 'none',
                    keepBuildDir: true,
                    name: 'playground.js',
                    out: './build/js/playground.js'
                }
            }
        }
    });

    grunt.registerTask('build', ['sass', 'autoprefixer', 'requirejs']);
    grunt.registerTask('default', ['build', 'connect']);
};
