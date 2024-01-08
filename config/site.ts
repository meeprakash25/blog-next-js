export interface SiteConfig {
  siteName: string;
  description: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and citiest around the world!",
  socialLinks: {
    twitter: "https://twitter.com/kosovoweb",
    youtube: "https://youtube.com/kosovoweb",
    github: "https://github.com/kosovoweb",
    linkedin: "https://linkedin.com/in/kosovoweb",
    instagram: "https://instagram.com/kosovoweb",
  },
};

export default siteConfig;
