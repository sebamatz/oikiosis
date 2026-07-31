import { MetadataRoute } from "next";
import testimonials from "@/data/testimonials.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oikeiosis.gr";

  // The core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sos-page`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9, // High priority for conversion/help pages
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/audio-maps`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/first-session`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "weekly", // Weekly if you add new testimonials often
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/reach-hub`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // NOTE: /privacy is deliberately absent — app/privacy/page.tsx calls
    // notFound() in production, so submitting it would feed Google a 404.
  ];

  // One entry per testimonial detail page.
  const testimonialRoutes: MetadataRoute.Sitemap = testimonials.map(
    (testimonial) => ({
      url: `${baseUrl}/testimonials/${testimonial.id}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    }),
  );

  return [...staticRoutes, ...testimonialRoutes];
}
