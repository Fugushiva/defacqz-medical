/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://defacqz-medical.vercel.app",
  generateRobotsTxt: false, // robots.txt is managed manually (noindex during dev)
  generateIndexSitemap: false,
  outDir: "public",
  // Explicit route configuration with priorities
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/specialites"),
    await config.transform(config, "/equipe"),
    await config.transform(config, "/informations-pratiques"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/mentions-legales"),
    await config.transform(config, "/politique-confidentialite"),
  ],
  transform: async (config, path) => {
    // Legal pages get lower priority
    const isLegal =
      path.includes("mentions-legales") ||
      path.includes("politique-confidentialite");

    return {
      loc: path,
      changefreq: isLegal ? "yearly" : "monthly",
      priority: isLegal ? 0.3 : path === "/" ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
