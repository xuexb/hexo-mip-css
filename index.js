/**
 * @file hexo-mipcss
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
        min: false
    }, hexo.theme.config.mipcss, hexo.config.mipcss);
    var cwd = path.resolve(this.theme_dir, './source/css');
    var data = glob.sync('**/!(_*).css', {
        cwd: cwd
    });

    content = data.map(function (uri) {
        return path.resolve(cwd, uri);
    }).map(function (filepath) {
        return fs.readFileSync(filepath).toString();
    }).join('');

    if (config.min) {
        content = new CleanCSS().minify(content).styles;
    }
});

hexo.extend.helper.register('mipcss', function () {
    if (!content) {
        return '';
    }

    return '<style mip-custom>' + content + '</style>';
});
