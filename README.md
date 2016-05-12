# workflow
### 开发视图模版结构说明
- include/{{name}}.jade 各个模块结构文件
- view.jade 视图模版结构文件

	```
	extends ./include/layout.jade
	block title
  		title 通用视图模版
	block meta
  		meta(http-equiv="X-UA-Compatible", content="IE=edge,chrome=1")
	block link
	block style
  		style(type="text/css").
    		body {
      			background: rgba(0,0,0,0.4);
      			color: #ffffff;
      			text-align:center;
    		}
	block globalscript
  		script(src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js")
	block content
  		h1 body主要视图代码
	block script
  		script(type="text/javascript").
    	console.log('底部js模块')
	```
	
- view.jade继承layout.jade
 
- 变量说明

	**1. block title:**  页面标题
	
	**2. block meta:** head中页面独立meta模块
	
	**3. block link:**head中页面独立引用样式模块
	
	**4. block style:** 页面行内样式模块

	**5. block globalscript:** 顶部js全局变量模块

	**6. block content:** body内主要布局内容
	
	**7. block script:** 页面底部js模块