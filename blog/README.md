# Node 综合 Web 案例

## 1.目录结构

```
|—— app.js
|—— controllers
|—— modules
|—— node_modules        第三方包
|—— package.json        包描述文件
|—— package-lock.json   第三方包版本锁定文件(npm 5 以后才有)
|—— public              公共的静态资源
|—— README.md           项目说明文档
|—— routes
|__ views               存储视图目录

```

## 2.模板页

- art-template 子模板 http://aui.github.io/art-template/zh-cn/docs/syntax.html#%E5%AD%90%E6%A8%A1%E6%9D%BF
- art-template 模板继承 http://aui.github.io/art-template/zh-cn/docs/syntax.html#%E6%A8%A1%E6%9D%BF%E7%BB%A7%E6%89%BF

## 3.路由设计

| 路径      | 方法 | get 参数 | post 参数                 | 是否需要权限 | 备注         |
| --------- | ---- | -------- | ------------------------- | ------------ | ------------ |
| /         | GET  |          |                           |              | 渲染首页     |
| /register | GET  |          |                           |              | 渲染注册页   |
| /register | POST |          | email、nickname、password |              | 处理注册请求 |
| /login    | GET  |          |                           |              | 渲染登陆页   |
| /login    | POST |          | email、password           |              | 处理登陆请求 |
| /logout   | GET  |          |                           |              | 处理退出请求 |
|           |      |          |                           |              |              |
|           |      |          |                           |              |              |
|           |      |          |                           |              |              |




## 4.模型设计

## 5.功能实现
