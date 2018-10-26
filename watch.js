const chokidar = require('chokidar');
const child_process = require('child_process');
let watcher = chokidar.watch(['extension','src','project']);
watcher.on('ready', function () {
  // console.log(`start watch ${PACKAGES_PATH}`)
  const change = ()=>{
    const excute = child_process.exec('gulp default', null, function (err) {

    })
    excute.stdout.on('data',(data)=>{
      console.log(data)
    })
  }
  watcher
    .on('change', change)
    .on('addDir', change)
    .on('unlinkDir', change)
    .on('unlink', change)
});