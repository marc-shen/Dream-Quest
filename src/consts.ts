// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "cn";
export const SITE_TAB = "Dream-Quest";
export const SITE_TITLE = "Dream-Quest 🌇";
export const SITE_DESCRIPTION = "Kadath Drawer's personal blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Kadath Drawer";
export const USER_SITE = "https://blog.stic.work"; // At the same time, this is also the site retrieved by the i18n configuration.
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://blog.stic.work";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
};
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// Menu items for navigation
export const menuItems = [
  {
    id: "home",
    text: "主页/Home",
    href: "/",
    svg: "material-symbols:home-outline-rounded",
    target: "_self",
  }, // Home page
  {
    id: "about",
    text: "关于/About",
    href: "/about",
    svg: "material-symbols:info-outline-rounded",
    target: "_self",
  }, // About page
  {
    id: "blog",
    text: "博文/Blogs",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "所有/All blogs",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "科技/Tech blogs",
        href: "/blog/categories/tech",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活/Life blogs",
        href: "/blog/categories/life",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目/Project",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友链/Friend",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "联系/Contact",
    href: "mailto:KadathDrawer@outlook.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://afdian.com/a/ChanTian",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "ri:cup-line",
  },
  {
    href: "https://github.com/marc-shen",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://gallery.stic.work",
    ariaLabel: "Gallery",
    title: "Gallery",
    svg: "ri:gallery-line",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "ri:rss-line",
  },
];
