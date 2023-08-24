import { navbar } from "vuepress-theme-hope";
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "代码",
    icon: "code",
    prefix: "/",
    children: [
      "code/Markdown",
      "code/AutoHotkey",
      "code/Electron",
      {
        text: "页面开发",
        icon: "vue",
        prefix: "",
        children: ["web/VuePress", "web/docsify", "deploy/VPS"],
      },
    ],
  },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      "apps/Applist",
      {
        text: "直播手册",
        icon: "quote",
        link: "apps/livestreaming/1_obs_basic",
      },
      {
        text: "服务/系统",
        icon: "any",
        prefix: "",
        children: ["services/NAS", "windows/faq"],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: ["Diet", "Shoppinglist", "Coupon"],
  },
  {
    text: "工具",
    icon: "tool",
    children: [
      {
        text: "ChatGPT SC",
        icon: "creative",
        link: "https://www.aishort.top/",
      },
      { text: "IMGPrompt", icon: "pic", link: "https://prompt.newzone.top/" },
      { text: "文字处理", icon: "others", link: "https://tools.newzone.top/" },
      {
        text: "工具收藏",
        icon: "categoryselected",
        link: "https://nav.newzone.top/",
      },
    ],
  },
]);
