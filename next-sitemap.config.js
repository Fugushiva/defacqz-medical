/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://defacqz-medical.vercel.app",
  generateRobotsTxt: false, // robots.txt is managed manually (noindex during dev)
  generateIndexSitemap: false,
  outDir: "public",
};

module.exports = config;
