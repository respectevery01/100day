export type DayEntry = {
  day: number;
  title: string;
  blogUrl?: string;
  twitterUrl?: string;
};

/**
 * 100 天计划数据
 * 
 * 修改指南：
 * - day: 第几天 (1-100)
 * - title: 当天文章标题
 * - blogUrl: 博客文章链接（可选）
 * - twitterUrl: 推特文章链接（可选）
 * - 两者都留空表示未完成
 * 
 * 示例：
 * { day: 1, title: '我的第一天', blogUrl: 'https://yourblog.com/day-1', twitterUrl: 'https://twitter.com/you/status/xxx' }
 * { day: 2, title: '只有博客', blogUrl: 'https://yourblog.com/day-2' }
 * { day: 3, title: '待完成' }
 */
export const days: DayEntry[] = [
  { day: 1, title: '一家公司的非共识豪赌：A16z', twitterUrl: 'https://x.com/jask_don/status/2063154696953688260', blogUrl: 'https://blog.jask.dev/posts/company-non-consensus-gamble-a16z/' },
  { day: 2, title: 'SpaceX：赌局与帝国', twitterUrl: 'https://x.com/jask_don/status/2063613850159563097', blogUrl: 'https://blog.jask.dev/posts/spacex-gamble-and-empire/' },
  { day: 3, title: 'YZi Labs 前世今生：从 Binance Labs 到百亿资产跨行业巨头的战略跃迁', twitterUrl: 'https://x.com/jask_don/status/2063892475295736251', blogUrl: 'https://blog.jask.dev/posts/binance-to-yzilabs/' },
  { day: 5, title: '待完成' },
  { day: 6, title: '待完成' },
  { day: 7, title: '待完成' },
  { day: 8, title: '待完成' },
  { day: 9, title: '待完成' },
  { day: 10, title: '待完成' },
  { day: 11, title: '待完成' },
  { day: 12, title: '待完成' },
  { day: 13, title: '待完成' },
  { day: 14, title: '待完成' },
  { day: 15, title: '待完成' },
  { day: 16, title: '待完成' },
  { day: 17, title: '待完成' },
  { day: 18, title: '待完成' },
  { day: 19, title: '待完成' },
  { day: 20, title: '待完成' },
  { day: 21, title: '待完成' },
  { day: 22, title: '待完成' },
  { day: 23, title: '待完成' },
  { day: 24, title: '待完成' },
  { day: 25, title: '待完成' },
  { day: 26, title: '待完成' },
  { day: 27, title: '待完成' },
  { day: 28, title: '待完成' },
  { day: 29, title: '待完成' },
  { day: 30, title: '待完成' },
  { day: 31, title: '待完成' },
  { day: 32, title: '待完成' },
  { day: 33, title: '待完成' },
  { day: 34, title: '待完成' },
  { day: 35, title: '待完成' },
  { day: 36, title: '待完成' },
  { day: 37, title: '待完成' },
  { day: 38, title: '待完成' },
  { day: 39, title: '待完成' },
  { day: 40, title: '待完成' },
  { day: 41, title: '待完成' },
  { day: 42, title: '待完成' },
  { day: 43, title: '待完成' },
  { day: 44, title: '待完成' },
  { day: 45, title: '待完成' },
  { day: 46, title: '待完成' },
  { day: 47, title: '待完成' },
  { day: 48, title: '待完成' },
  { day: 49, title: '待完成' },
  { day: 50, title: '待完成' },
  { day: 51, title: '待完成' },
  { day: 52, title: '待完成' },
  { day: 53, title: '待完成' },
  { day: 54, title: '待完成' },
  { day: 55, title: '待完成' },
  { day: 56, title: '待完成' },
  { day: 57, title: '待完成' },
  { day: 58, title: '待完成' },
  { day: 59, title: '待完成' },
  { day: 60, title: '待完成' },
  { day: 61, title: '待完成' },
  { day: 62, title: '待完成' },
  { day: 63, title: '待完成' },
  { day: 64, title: '待完成' },
  { day: 65, title: '待完成' },
  { day: 66, title: '待完成' },
  { day: 67, title: '待完成' },
  { day: 68, title: '待完成' },
  { day: 69, title: '待完成' },
  { day: 70, title: '待完成' },
  { day: 71, title: '待完成' },
  { day: 72, title: '待完成' },
  { day: 73, title: '待完成' },
  { day: 74, title: '待完成' },
  { day: 75, title: '待完成' },
  { day: 76, title: '待完成' },
  { day: 77, title: '待完成' },
  { day: 78, title: '待完成' },
  { day: 79, title: '待完成' },
  { day: 80, title: '待完成' },
  { day: 81, title: '待完成' },
  { day: 82, title: '待完成' },
  { day: 83, title: '待完成' },
  { day: 84, title: '待完成' },
  { day: 85, title: '待完成' },
  { day: 86, title: '待完成' },
  { day: 87, title: '待完成' },
  { day: 88, title: '待完成' },
  { day: 89, title: '待完成' },
  { day: 90, title: '待完成' },
  { day: 91, title: '待完成' },
  { day: 92, title: '待完成' },
  { day: 93, title: '待完成' },
  { day: 94, title: '待完成' },
  { day: 95, title: '待完成' },
  { day: 96, title: '待完成' },
  { day: 97, title: '待完成' },
  { day: 98, title: '待完成' },
  { day: 99, title: '待完成' },
  { day: 100, title: '待完成' },
];

export function isCompleted(entry: DayEntry): boolean {
  return !!(entry.blogUrl || entry.twitterUrl);
}

export function getCompletedCount(entries: DayEntry[]): number {
  return entries.filter(isCompleted).length;
}

export function getProgress(entries: DayEntry[]): number {
  return Math.round((getCompletedCount(entries) / entries.length) * 100);
}
