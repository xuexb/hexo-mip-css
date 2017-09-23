/**
 * @file hexo-mip-css
 * @author xuexb <fe.xiaowu@gmail.com>
 */

/* global hexo */

var path = require('path');
var fs = require('fs');
var extend = require('extend');
var glob = require('glob');
var CleanCSS = require('clean-css');

var content = '';

hexo.extend.filter.register('before_generate', function () {
    content = '';
});

hexo.extend.filter.register('after_generate', function () {
    var config = extend({
        cssmin: false
    }, hexo.theme.config.mip, hexo.config.mip);
    var cwd = path.resolve(this.theme_dir, './source/css');
    var data = glob.sync('**/!(_*).css', {
        cwd: cwd
    });

    content = data.map(function (uri) {
        return path.resolve(cwd, uri);
    }).map(function (filepath) {
        return fs.readFileSync(filepath).toString();
    }).join('');

    if (config.cssmin) {
        content = new CleanCSS().minify(content).styles;
    }
});

hexo.extend.helper.register('mipcss', function () {
    if (!content) {
        return '';
    }

    return '<style mip-custom>' + content + '</style>';
});
