import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://stormyops.com",
      lastModified: new Date(),
    },
    {
      url: "https://stormyops.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://stormyops.com/work",
      lastModified: new Date(),
    },
    {
      url: "https://stormyops.com/resume",
      lastModified: new Date(),
    },
    {
      url: "https://stormyops.com/contact",
      lastModified: new Date(),
    },
        {
      url: "https://stormyops.com/about",
      lastModified: new Date(),
    },
        {
      url: "https://stormyops.com/progression",
      lastModified: new Date(),
    },
  ]
}