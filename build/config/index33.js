module.exports = {
//ZXPSignCmd -selfSignedCert CN GuangZhou cgs.com chenguose 123456 certificate.p12>
    // Name
    name: 'PixiAnimate',
  countryCode:'CN',
  stateOrProvince:'GuangZhou',
  organization:'cgs.com',
  commonName:'chenguose',
  outputPath:'certificate',
    // Pattern for loading tasks
    pattern: ['build/tasks/*.js'],

    // Contains the project folder
    projectContent: ['extension/**/*'],

    // Temporary staging folder
    bundleId: 'cgs.com.h5',

    // Output file name
    outputName: 'CGS.zxp',
    outputDebugName: 'CGS-debug.zxp',

    // Remote debugging for panels in Flash
    remoteDebug: 'build/debug.xml',
    remoteDebugOutput: '.debug',

    packagerCert: 'build/certificate.p12',
    packagerPass: 'password',

    // Vendor release for the runtime
    runtimeOutput: 'cgs.com.h5/runtime',
    runtimeDebugOutput: 'cgs.com.h5/runtime-debug',
    runtimeResources: [
        'node_modules/pixi.js/dist/pixi.min.js',
        'node_modules/pixi-animate/dist/pixi-animate.min.js'
    ],
    runtimeDebugResources: [
        'node_modules/pixi.js/dist/pixi.js',
        'node_modules/pixi.js/dist/pixi.js.map',
        'node_modules/pixi-animate/dist/pixi-animate.js',
        'node_modules/pixi-animate/dist/pixi-animate.js.map'
    ],

    // The files to source when running watch
    watchFiles: [
        './**/*.*',
        '!node_modules/**',
        '!extension/node_modules/**',
        '!cgs.com.h5',
        '!extension/dialog/cep/**',
        '!extension/bin'
    ],

    // The files to include for JS linting
    lintFiles: [
        'build/**/*.js',
        'src/extension/**/*.js',
        'gulpfile.js'
    ],

    buildPublish: {
        src: 'src/extension/publish',
        dest: 'cgs.com.h5/publish'
    },

    buildSpritesheets: {
        src: 'src/extension/publish/spritesheets/',
        name: 'spritesheets.js',
        dest: 'cgs.com.h5/publish'
    },

    buildPreview: {
        src: 'src/extension/preview/preview.js',
        name: 'preview.js',
        dest: 'cgs.com.h5/preview'
    },

    buildPreviewApp: {
        src: 'src/extension/preview',
        dest: 'cgs.com.h5/preview'
    },

    buildDialog: {
        src: 'src/extension/dialog',
        name: 'main.js',
        dest: 'cgs.com.h5/dialog'
    },
    mac: require('./mac'),
    win: require('./win')
};