import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/contact-us.php", destination: "/contact-us", permanent: true },
      { source: "/:path*.html", destination: "/:path*", permanent: true },
    ];
  },
  experimental: {
    // AppleDouble files on the mounted volume corrupt Turbopack's persisted cache.
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
