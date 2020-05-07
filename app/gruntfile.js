module.exports = function(grunt){
    // Conf
    grunt.initConfig({
        concat: {
            css: {
                src: ['styles/*.css'],
                dest: 'build/styles.css'
            }
        },

        sass: {
            build: {
                files: [{
                    src: 'styles/style.scss',
                    dest: 'styles/styles2.css'
                }]
                
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');

    //Register tasks
    grunt.registerTask('concat-css', ['concat:css']);
};