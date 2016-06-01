'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-connect');
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
        }
    });

    grunt.registerTask('build', ['sass, requirejs']);
    grunt.registerTask('default', ['build', 'connect']);
};
