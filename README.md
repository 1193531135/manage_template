# 这是一个通用管理系统模板

### 登陆界面展示
![登录演示](./demo_img/login_image.gif "登录演示")
### 内部页面样式展示
![主要页面演示](./demo_img/main.gif "主要页面演示")

## 用法1 新增页面
创建组件后，在路由`routes`中 `meta`为 `start`的对象中的`children` 中引入 
children数组中的配置项
|key|数据类型|描述|
|-|-|-|
|meta|String|该页面的标签，导航栏的标签|
|icon|String|icon所绑定的class，可使用elementUI的icon的class|

二级标签在需要加入二级标签的标签中设置children，在children中相同配置
<font color="red">!注意目前仅最多支持二级标签</font>

## 初始配置
在vuex文件 src/store/index.js 下中的 state
|key|数据类型|描述|
|-|-|-|
|token|String|token作为登录验证和页面刷新验证|
|defineNowPath|String|基础路由，所有页面删除后，会更具该路由匹配页面|
|nowPath|String|当前页面所在的路由，可用于配置初始路由|
