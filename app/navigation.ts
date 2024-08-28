export const main_nav_routes = [
  {
    url: "/home",
    name: "home",
  },
  {
    url: "/about",
    name: "about",
  },
  {
    url: "/projects",
    name: "projects",
  },
  {
    url: "/activity",
    name: "activity",
  },
  {
    url: "/blogs",
    name: "blogs",
  },
];

export const aboutNav: NeotreeItem[] = [
  {
    fileName: "greeting.ts",
    link: "/about",
    slug: "",
  },
  {
    fileName: "personal.ts",
    link: "/about/personal",
    slug: "personal",
  },
  {
    fileName: "gear.ts",
    link: "/about/gear",
    slug: "gear",
  },
  {
    fileName: "work.ts",
    link: "/about/work",
    slug: "work",
  },
] as const;

export const codingActivityNav: NeotreeItem[] = [
  {
    fileName: "languages.ts",
    link: "/activity",
    slug: "languages",
  },
  {
    fileName: "worktime.ts",
    link: "/activity/worktime",
    slug: "worktime",
  },
  {
    fileName: "editor.ts",
    link: "/activity/editor",
    slug: "editor",
  },
  {
    fileName: "os.ts",
    link: "/activity/os",
    slug: "operating-systems",
  },
];
