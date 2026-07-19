export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'LineageOS 14.1 For Galaxy J7 2015',
    slug: 'lineageos-14-1-for-galaxy-j7-2015',
    date: '2017-01-13',
    category: 'Android',
    excerpt: 'Install LineageOS 14.1 (Android 7.1 Nougat) on your Samsung Galaxy J7 2015. This custom ROM brings the latest Android features to your device with improved performance and battery life.',
  },
  {
    title: 'CyanogenMod 12.1 For Galaxy Grand 2',
    slug: 'cyanogenmod-12-1-for-galaxy-grand-2',
    date: '2015-11-18',
    category: 'Android',
    excerpt: 'Get Android 5.1 Lollipop on your Galaxy Grand 2 with CyanogenMod 12.1. This unofficial port is now stable with dual SIM support and all features working.',
  },
  {
    title: 'How to Root Galaxy Grand 2 SM-G7102',
    slug: 'how-to-root-galaxy-grand-2-sm-g7102',
    date: '2014-04-27',
    category: 'Root Guide',
    excerpt: 'Learn how to root your Samsung Galaxy Grand 2 SM-G7102 using CF-Auto-Root. Gain full access to customize your phone, install root apps, and improve performance.',
  },
  {
    title: 'Walkman Album And Movies App for Grand 2',
    slug: 'walkman-album-and-movies-app-for-grand-2',
    date: '2014-03-29',
    category: 'Android Apps',
    excerpt: 'Install Sony Walkman, Album, and Movies apps on your Samsung Galaxy Grand 2. Experience Sony\'s premium media applications on your device.',
  },
  {
    title: 'Motorola Moto 360 Design Hangout',
    slug: 'motorola-moto-360-design-hangout',
    date: '2014-03-18',
    category: 'News',
    excerpt: 'Motorola announces a live Hangout on Air with lead designer Jim Wicks to discuss the design philosophy behind the revolutionary Moto 360 smartwatch.',
  },
  {
    title: 'How to Root T-Mobile Galaxy S4 on Android 4.4.2 KitKat',
    slug: 'how-to-root-t-mobile-galaxy-s4-on-android-4-4-2-kitkat',
    date: '2014-03-16',
    category: 'Root Guide',
    excerpt: 'Root your T-Mobile Galaxy S4 SGH-M919 running Android 4.4.2 KitKat. This guide covers the complete rooting process for firmware version M919UVUFNB4.',
  },
];