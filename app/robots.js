export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/about-us",
        "/services",
        "/projects",
        "/contact-us",
        "/packages",
      ],
    },
    sitemap: "https://mountainsquareconstruction.com/sitemap.xml",
  };
}
