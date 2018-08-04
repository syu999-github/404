# 404

this is a chrome extension。
屏蔽一些不良网站，打开后直接显示404。

## 原理

不良网站的url都放在一个黑名单中（blacklist.js），当用户打开chrome标签页时，程序会遍历黑名单和浏览器地址栏里的地址做对比，如果能对上，则意味着该网站是不良网站，直接屏蔽掉。

## 维护

目前存在2个问题：

1、黑名单如何维护，应该有个地方能提交

2、chrome应该能自动获得最新的黑名单，而不是每次git pull再去浏览器里重新载入扩展。

## 愿景

其实黑名单不是一个好办法，最好用AI人工智能，不过目前还做不到。。。


## update 

* 2018.08.04
  自动更新blacklist.json文件。
  感谢[DiamondYuan](https://github.com/DiamondYuan)提供了更新json的方法。
