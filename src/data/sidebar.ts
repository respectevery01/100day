export type LinkItem = {
  name: string;
  url: string;
  description?: string;
};

export type LinkSection = {
  title: string;
  links: LinkItem[];
};

export const sidebarSections: LinkSection[] = [
  {
    title: '其他链接',
    links: [
      { name: '我的博客', url: 'https://blog.jask.dev'},
      { name: '个人主页', url: 'https://jask.dev' },
    ],
  },
  {
    title: '项目',
    links: [
      { name: 'UZEN Labs', url: 'https://uzenlabs.com' },
      { name: 'Loom', url: 'https://loomonarc.xyz' },
    ],
  },
];
