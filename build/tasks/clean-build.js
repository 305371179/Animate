module.exports = function(gulp, options, plugins) {
    console.log(options.pluginTempDebug,options.pluginTempRelease)
    gulp.task('clean-build', function(){
        return plugins.del([
            options.pluginTempDebug,
            options.pluginTempRelease,
            'project/mac/build',
            'src/PixiAnimate/lib/mac'
        ]);
    });  
};