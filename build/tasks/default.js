module.exports = function(gulp, options, plugins) {
    gulp.task('default', function(done){
        var fs = require('fs-extra')
        var path = require('path')
        fs.copySync(path.resolve(__dirname,'../../src/extension/publish/template_html/template'),path.resolve(__dirname,'../../extension/publish/template'))
        // console.log(__dirname,path.resolve('../../extension/publish'))
        // return
        var debug = options.argv.debug;
        var plugin = options.argv.plugin;
        var install = options.argv.install;

        plugins.gutil.log("+-------------------+".green);
        plugins.gutil.log("|    PixiAnimate    |".green);
        plugins.gutil.log("+-------------------+".green);
        plugins.gutil.log("Mode: ".gray, (debug ? "Debug" : "Release").yellow);

        var tasks = [];

        // if (plugin) {
            tasks.push('plugin');
        // }

        tasks.push(
            'clean',
            // 'lint',
            'stage'
        );

        // Turn on remote debugging
        if (debug) {
            tasks.push('remote-debug');
        }

        tasks.push(
            'build-publish',
            'build-dialog',
            'build-preview-app',
            'build-preview',
            'build-spritesheets',
            'runtime-copy',
            'runtime-copy-debug',
            'plugin-copy-mac',
            'plugin-copy-win',
            'package',
            'remote-debug',
            // 'clean-stage'
        );

        // if (install) {
            tasks.push(
                // 'uninstall',
                // 'pre-install',
                'install',
                'notify',
            );
        // }

        tasks.push(done);

        plugins.sequence.apply(plugins.sequence, tasks);
    });
};
