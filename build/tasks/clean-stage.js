module.exports = function(gulp, options, plugins) {
    console.log(options.bundleId)
    gulp.task('clean-stage', function(){
        return plugins.del([options.bundleId]);
    });  
};