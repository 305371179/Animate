module.exports = function(gulp, options, plugins) {
    let cmd = `${options.packager} -selfSignedCert ${options.countryCode} ${options.stateOrProvince} ${options.organization} ${options.commonName} ${options.packagerPass} build/${options.outputPath}.p12`
    console.log(cmd)
    gulp.task('cert', plugins.shell.task([cmd], {
        quiet: false
    }));
};
//ZXPSignCmd -selfSignedCert CN GuangZhou cgs.com chenguose 123456 certificate.p12>