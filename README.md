# 404

this is a chrome extension。

屏蔽一些不良网站，打开后直接显示404。

## 原理

不良网站的url都放在一个黑名单中~~blacklist.js~~ blacklist.json (2018.08.04) update），当用户打开chrome标签页时，程序会遍历黑名单和浏览器地址栏里的地址做对比，如果能对上，则意味着该网站是不良网站，直接屏蔽掉。

## 维护

目前存在~~2~~1个问题：

1、黑名单如何维护，应该有个地方能提交

~~2、chrome应该能自动获得最新的黑名单，而不是每次git pull再去浏览器里重新载入扩展。~~

此问题已经得到解决，感谢[DiamondYuan](https://github.com/DiamondYuan)提供了更新json的方法

## 愿景

其实黑名单不是一个好办法，最好用AI人工智能，不过目前还做不到。。。

## 打算要做的新功能

假设一个用户A，他进入了一个钓鱼网站，结果造成了损失。如果有这个插件，当他访问钓鱼网站的时候，这个插件要能够强制跳转到真网站上去，以减少用户的损失。

因此，为了实现这个功能，目前需要考虑的是，钓鱼网站列表写在黑名单里，还是写在一另一个json里？欢迎大家给出建议。

## update 

* 2018.08.04
  自动更新blacklist.json文件。
  感谢[DiamondYuan](https://github.com/DiamondYuan)提供了更新json的方法。
  
* 2018.08.12
  新增9个黑名单
