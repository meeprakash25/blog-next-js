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
  siteName: "CChart",
  description:
    "The current chart highlights music creativity and various artists, centering on their talent and unique expressions through their music.",
  socialLinks: {
    twitter: "",
    youtube: "https://www.youtube.com/channel/UCD0DjJgWAGXxALVlkbCzqtg",
    github: "",
    linkedin: "",
    instagram: "https://instagram.com/CURRENTCHART",
  },
};

export default siteConfig;
