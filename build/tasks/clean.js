module.exports = function(gulp, options, plugins) {

    gulp.task('clean', function(){
        var output = options.argv.debug ? 
            options.outputDebugName :
            options.outputName;
      console.log([
        options.bundleId,
        output,
        options.pluginFile
      ])
        return plugins.del([
            options.bundleId,
            output,
            options.pluginFile
        ]);
    });  
};