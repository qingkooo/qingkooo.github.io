module.exports = {
	title: "Qingkooo's Blog",
	description: "网站description",
	configureWebpack: {
		resolve: {
			alias: {
				/* 配置的根在docs目录 */
				"@image": "../public/image",
				"@docs": "./.vuepress"
			}
		}
	},
	markdown: {
		toc: { includeLevel: [1, 2] },
		lineNumbers: true // 代码块显示行号
	},
	serviceWorker: {
		// 当网站更新（即 Service Worker 更新）时，它会提供一个 refresh 按钮，允许用户立刻刷新内容
		updatePopup: {
			message: "New content is available.",
			buttonText: "Refresh"
		}
	},
	themeConfig: {
		lastUpdated: "Last Updated", // 该篇文档的git提交时间

		/* 导航条 */
		search: true,
		searchMaxSuggestions: 10,
		repo: "qingkooo/qingkooo.github.io", // 仓库地址，显示在右上角的链接
		// repoLabel: '查看源码', // 仓库链接文字，默认会自动显示为"GitHub"/"GitLab"/"Bitbucket"/"Source"
		// nav: [{ text: "Home", link: "/" }],

		/* 侧边栏 */
		sidebarDepth: 0, // sidebar内容大纲的深度，0为不展示
		displayAllHeaders: false, // sidebar内容大纲全部展开
		sidebar: [
			["/", "Home"],
			{
				title: "Group 1",
				children: ["/foo/", "/foo/one"]
			},
			{
				title: "Group 2",
				children: ["/bar/", "/bar/one"]
			}
		]
	}
};
