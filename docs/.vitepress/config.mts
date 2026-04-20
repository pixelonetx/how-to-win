import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/how-to-win/",
  title: "HowToWin",
  description: "Windows 使用笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/introduce", activeMatch: "/guide/" },
    ],

    sidebar: [
      {
        text: "写在前面",
        items: [{ text: "阅读指南", link: "/guide/introduce" }],
      },
      {
        text: "一些知识",
        items: [
          { text: "Windows 介绍", link: "/guide/basic/windows-introduce" },
          {
            text: "安装、版本、许可证",
            link: "/guide/basic/windows-installation",
          },
          { text: "架构与芯片差异", link: "/guide/basic/hardware" },
        ],
      },
      {
        text: "系统",
        items: [
          { text: "分区与环境变量", link: "/guide/system/disk-management" },
          { text: "WSL", link: "/guide/system/wsl" },
        ],
      },
      {
        text: "终端",
        items: [
          {
            text: "Terminal 与 PowerShell",
            link: "/guide/terminal/modern-shell",
          },
          {
            text: "环境变量与 PATH",
            link: "/guide/terminal/environment-variables",
          },
          {
            text: "包管理",
            link: "/guide/terminal/package-manager",
          },
        ],
      },
      {
        text: "开发",
        items: [
          { text: "Windows 开发", link: "/guide/development/architecture" },
          { text: "C/C++ 开发", link: "/guide/development/c-dev" },
          { text: "Python 开发", link: "/guide/development/python-dev" },
        ],
      },
      {
        text: "拓展阅读",
        items: [{ text: "一些工具", link: "/guide/tool/tools" }],
      },
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/pixelonetx/how-to-win" },
    ],

    footer: {
      message: "Windows 使用与开发笔记。",
      copyright: "内容仍在整理中。",
    },
  },
});
