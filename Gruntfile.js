module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      views: {
        expand: true,
        flatten: true,
        src: 'src/views/*',
        dest: 'web/'
      },
      zeroclip: {
        expand: true,
        flatten: true,
        src: 'bower_components/zeroclipboard/ZeroClipboard.swf',
        dest: 'web/'
      }
    },

    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'server.js']
    },

    jasmine: {
      src: [
        'web/public/js/vendor.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'web/public/js/config.js',
        'web/public/js/app.js'
      ],
      options: {
        specs: ['spec/**/*.js']
      }
    },

    uglify: {
      dev: {
        files: {
          'web/public/js/config.js': ['src/js/modules/*.js'],
          'web/public/js/app.js': ['src/js/**/*.js', '!src/js/modules/*.js'],
          'web/public/js/vendor.js': [
            'bower_components/angular/angular.js',
            'bower_components/lodash/dist/lodash.js',
            'bower_components/zeroclipboard/ZeroClipboard.js'
          ]
        }
      }
    },

    watch: {
      express: {
        files: ['src/**/*'],
        tasks: ['build', 'express:dev'],
        options: {
          spawn: false // Required.
        }
      }
    },

    shell: {
      sassc: {
        options: {
          stdout: true
        },
        command: function() {
          var args = [];
          if (!grunt.file.exists("web/public/css") || !grunt.file.isDir("web/public/css")) {
            args.push("mkdir web/public/css");
          }
          args.push("sassc -l src/stylesheets/main.scss web/public/css/app.css");
          args = args.join(" && ");

          console.log("Executing: " + args);
          return args;
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['uglify', 'copy', 'shell:sassc']);
  grunt.registerTask('default', ['jshint', 'build']);
  grunt.registerTask('server', ['build', 'express:dev', 'watch']);
};
