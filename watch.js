const chokidar = require('chokidar');
const child_process = require('child_process');
let watcher = chokidar.watch(['extension','src','project','fla/data.json']);
watcher.on('ready', function () {
  // console.log(`start watch ${PACKAGES_PATH}`)
  const change = ()=>{
    const excute = child_process.exec(/*'gulp default'*/'npm run debug', null, function (err) {
      child_process.exec(/*'gulp default'*/'gulp notify')
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

