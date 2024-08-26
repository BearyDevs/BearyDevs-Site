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
    url: "/coding-activity",
    name: "coding-activity",
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
    link: "/coding-activity",
    slug: "languages",
  },
  {
    fileName: "activity.ts",
    link: "/coding-activity/activity",
    slug: "activity",
  },
  {
    fileName: "editor.ts",
    link: "/coding-activity/editor",
    slug: "editor",
  },
  {
    fileName: "os.ts",
    link: "/coding-activity/os",
    slug: "operating-systems",
  },
];
