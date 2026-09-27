import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // AppleDouble files on the mounted volume corrupt Turbopack's persisted cache.
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
