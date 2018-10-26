const notifier = require('node-notifier')
module.exports = function (gulp, options, plugins) {
  gulp.task('notify', function () {
    notify()
    return null
  });
};
const notify = () => {
  notifier.notify({
    title: '打包提示',
    message: '打包完成'
  })
}