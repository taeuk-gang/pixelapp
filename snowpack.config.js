module.exports = {
    mount: {
        'src': '/static'
    },
    extends: '@snowpack/app-scripts-lit-element',
    plugins: [
        './tools/glslPlugin.js',
        './tools/cssImportTextPlugin.js',
        '@snowpack/plugin-optimize',
    ],
    devOptions: {
        out: './docs',
    },
    installOptions: {
        sourceMap: false,
        treeshake: true,
    },
    buildOptions: {
        baseUrl: '/pixelapp/',
        clean: true
    }
};
