(function (global) {
    System.config({
        defaultJSExtensions: true,
        baseUrl: '.',
        paths: {
            npm: "node_modules/"
        },
        map: {
            "src": "src",
            "@angular/core": 'npm@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm@angular/forms/bundles/forms.umd.js',
            'rxjs': 'npmrxjs',
            /*'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',*/
            'ts': 'npm@plugin-typescript@4.0.10/lib/plugin.js',
            'typescript': 'npm@typescript@2.0.3/lib/typescript.js'
        },
        packages: {
            src: {
                main: "./main.ts",
                defaultExtension: "js"
            },
            rxjs: {
                main: "./rx.js",
                defaultExtension: "js"
            }
        }
    });
})(window);