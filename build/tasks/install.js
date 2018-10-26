// module.exports = function(gulp, options, plugins) {
//     var output = options.argv.debug ?
//         options.outputDebugName :
//         options.outputName;
//
//     var cmd = options.installCmd
//         .replace('${installFolder}', options.installFolder)
//         .replace('${output}', output);
//     console.log(cmd)
//     gulp.task('install', plugins.shell.task([cmd],  {
//         'quiet': !options.argv.debug
//     }));
// };
const fs = require('fs')
const mkdirp = require('mkdirp')
module.exports = function (gulp, options, plugins) {
  // var cmd = ''
  // if(!fs.existsSync(options.installFolder)){
  //   mkdirp.sync(options.installFolder)
  // }
  // cmd += `sudo mkdir '${options.installFolder}' && cp -r '${options.bundleId}/.' '${options.installFolder}'`
  // // // console.log(cmd)

  var cmd = `npm run copy`
  gulp.task('install', plugins.shell.task([cmd], {
    'quiet': !options.argv.debug
  }));
};
