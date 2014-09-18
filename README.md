# smart-nav [![spm version](http://moekit.com/badge/smart-nav)](http://moekit.com/package/smart-nav)

---

比较优雅地避免fix的侧边栏插入底部

---

## 使用

```javascript
var smartnav = new SmartNav({
    // options
});
```

## 配置 

+  `target` 目标导航
+  `column` 用于高度比较的目标
+  `columnOffset` 对目标高度进行调整，一般是因为底部不一定是视觉上的底部
+  `columnEdge` 对比方向，默认为`bottom`,即导航与左侧box底部对齐，可以设置为`top`

具体使用参照Demo

