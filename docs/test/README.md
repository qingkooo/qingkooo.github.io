---
title: "test首页的标题"
meta:
  - name: description
    content: test description
  - name: keywords
		content: super duper SEO
---

[[toc]]
# 一级
## 二级
### 三级
#### toc
- [foo - index](/foo/)
- [foo - one](/foo/one.md)
- [bar - index](/bar/)
- [bar - one](/bar/one.md)


#### vue模板语法
{{1+2}}

<span v-for="i in 3">{{ i }} </span>

{{ $page }}

::: v-pre
**{{ This will be displayed as-is }}**

`{{ This will be displayed as-is }}`
:::


#### 图片
<!-- ![Image](~@image/cat1.jpeg) -->

#### 代码
```js{3,5}
// 高亮演示
function niz(name){
	const a = name;
	console.log(name);
}
```

#### 导入代码块
注意：基于项目根目录，而不是基于docs目录  

<<< @/docs/bar/snippet.js

#### 引入自定义组件	`<GlobalComp1 />`
引入全局组件：组件名为文件名，PascalCase方式命名  
使用\`\`括起来的组件，不会渲染。比如标题
<GlobalComp1 />
<code>
	<GlobalComp1></GlobalComp1>
</code>

#### 引入内置组件
Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

#### 自定义容器
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: v-pre
`{{ This will be displayed as-is }}`
:::
