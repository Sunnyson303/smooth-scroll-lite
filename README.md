# smooth-scroll-lite
原生js实现的简单的锚点滚动插件

<!-- TOC -->

- [smooth-scroll-lite](#smooth-scroll-lite)
- [基本用法](#基本用法)
- [API](#api)

<!-- /TOC -->

# 基本用法

* 初始化 
```
  var smoothScroll = new SmoothScroll({
      easing: 'easeInCubic',
      speed: 1000
    })
```

* js调用

```
    smoothScroll.scrollTo(document.querySelector('#position2'))

```

* 锚点绑定



```
        <li><a href="#position1" smooth-scroll-id>一</a></li>
        <li><a href="#position2" smooth-scroll-id>二</a></li>
        <li><a href="#position3" smooth-scroll-id>三</a></li>
``` 

# API

参数 | 类型 | 说明
---|----|---
speed | Number | 动画时间
easing | String | 动画类型



