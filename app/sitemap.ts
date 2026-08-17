import type { MetadataRoute } from "next";
import { astanaEsirtkisizQalaProject } from "@/data/projects";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${SITE.domain}${astanaEsirtkisizQalaProject.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    }
  ];
}
