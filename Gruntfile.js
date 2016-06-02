'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var importOnce = require('node-sass-import-once');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            playground: {
                options: {
                    base: './',
                    port: 9001
                }
            }
        },

        sass: {
            options: {
                outputStyle: 'expanded',
                sourceComments: true,
                includePaths: [
                    'src/sass/',
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
                    cwd: 'src/sass/',
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
                    mainConfigFile: './src/js/config.js',
                    optimize: 'none',
                    keepBuildDir: true,
                    name: 'playground.js',
                    out: './build/js/playground.js'
                }
            }
        },

        eslint: {
            dev: {
                src: ['src/**/*.js'],
                options: {
                    reset: true,
                    config: require.resolve('mobify-code-style/javascript/.eslintrc')
                }
            }
        },

        sasslint: {
            options: {
                configFile: require.resolve('mobify-code-style/css/.sass-lint.yml')
            },
            target: ['src/**/*.scss']
        },

        watch: {
            scripts: {
                files: ['Gruntfile.js', 'src/**/*.js'],
                tasks: ['compile-js']
            },
            styles: {
                files: ['src/**/*.scss'],
                tasks: ['compile-sass']
            }
        }
    });

    grunt.registerTask('compile-js', ['requirejs']);
    grunt.registerTask('compile-sass', ['sass', 'autoprefixer']);
    grunt.registerTask('build', ['eslint', 'sasslint', 'compile-sass', 'compile-js']);
    grunt.registerTask('default', ['build', 'connect:playground', 'watch']);
    grunt.registerTask('playground', 'default'); // alias
};
