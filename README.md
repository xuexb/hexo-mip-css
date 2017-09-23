# hexo-mip-css

在 hexo 主题中处理 MIP 的 css

## 使用

安装

``` bash
npm install --save hexo-mip-css
```

会把主题目录下 `souce/css/**/*.css` 打包成一个 `<style mip-custom>` 标签, 会忽略以 `_` 开头的文件.

在主题模板内 `<head>` 标签结束前使用 `mipcss()` 引入.

## 配置

``` yaml
# _config.yml
mip:
    # 是否开启 css 压缩, 默认为 false
    cssmin: false

    # 指定加载的文件, 以 `souce/css/` 为基础路径
    css:
        - reset.css
        - demo.css
```

## License

[MIT](./LICENSE)
