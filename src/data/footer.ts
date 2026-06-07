export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export const footerConfig = {
  copyright: '© 2026 Jask. All rights reserved.',
  socials: [
    { name: 'Twitter', url: 'https://x.com/jask_don' },
    { name: 'Blog', url: 'https://blog.jask.dev' },
    { name: 'GitHub', url: 'https://github.com/respectevery01'},
  ] as SocialLink[],
};
