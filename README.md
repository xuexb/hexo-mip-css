# hexo-mipcss

在 hexo 主题中处理 MIP 的 css

## 使用

安装

``` bash
npm install --save hexo-mipcss
```

会把主题目录下 `souce/css/**/*.css` 打包成一个 `<style mip-custom>` 标签, 会忽略以 `_` 开头的文件.

在主题模板内 `<head>` 标签结束前使用 `mipcss()` 引入.

## 配置

```
# _config.yml
mipcss:
    # 是否开启 css 压缩
    min: true
```

## License

[MIT](./LICENSE)
