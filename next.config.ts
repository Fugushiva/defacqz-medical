import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // SEO — keep noindex during pre-launch
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
          // Clickjacking protection
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // MIME sniffing protection
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Referrer policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Next.js requires unsafe-inline for inline scripts; Vercel Live also needs it
              "script-src 'self' 'unsafe-inline' https://vercel.live",
              "style-src 'self' 'unsafe-inline'",
              // Images: self, data URIs, blobs, Google Maps static
              "img-src 'self' data: blob: https://maps.googleapis.com",
              // Fetch/XHR: self + Vercel Speed Insights
              "connect-src 'self' https://vitals.vercel-insights.com",
              // Fonts: self (Next.js serves fonts from /_next/static)
              "font-src 'self'",
              // Frames: Google Maps embed only
              "frame-src https://maps.google.com",
              // No plugins
              "object-src 'none'",
              // Upgrade insecure requests in production
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
