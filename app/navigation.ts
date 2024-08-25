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

export const codeingActivityNav: NeotreeItem[] = [
  {
    fileName: "languages.ts",
    slug: "languages",
    link: "/coding-activity",
  },
  {
    fileName: "activity.ts",
    slug: "activity",
    link: "/coding-activity/activity",
  },
  {
    fileName: "editor.ts",
    slug: "editor",
    link: "/coding-activity/editor",
  },
  {
    fileName: "os.ts",
    slug: "operating-systems",
    link: "/coding-activity/os",
  },
];
