export const dynamic = "force-static";

export default async function sitemap() {
  const staticRoutes = [
    {
      url: "https://mountainsquareconstruction.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://mountainsquareconstruction.com/about-us",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://mountainsquareconstruction.com/services",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://mountainsquareconstruction.com/projects",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://mountainsquareconstruction.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
  return [...staticRoutes];
}
