import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/contact-us.php", destination: "/contact-us", permanent: true },
      { source: "/services-details", destination: "/services/global-apec-prp", permanent: true },
      { source: "/services-detailsbcms", destination: "/services/iso-22301-bcms", permanent: true },
      { source: "/services-detailscbpr", destination: "/services/cyber-trust-mark-ss-712", permanent: true },
      { source: "/services-detailsctm", destination: "/services/cyber-trust-mark-ss-712", permanent: true },
      { source: "/services-detailsdptm", destination: "/services/data-protection-trustmark-ss-714", permanent: true },
      { source: "/services-detailseol", destination: "/services/ss-587-end-of-life-ict", permanent: true },
      { source: "/services-detailsfive", destination: "/services/iso-9001-qms", permanent: true },
      { source: "/services-detailsfivecyber", destination: "/services/cyber-essentials-mark", permanent: true },
      { source: "/services-detailsfour", destination: "/services/iso-14001-ems", permanent: true },
      { source: "/services-detailsohms", destination: "/services/iso-45001-ohsms", permanent: true },
      { source: "/services-detailsone", destination: "/services/iso-iec-27701-pims", permanent: true },
      { source: "/services-detailsthree", destination: "/services/iso-iec-42001-aims", permanent: true },
      { source: "/services-detailstwo", destination: "/services/iso-37001-abms", permanent: true },
      // Pack URLs for sections whose new pages are not built yet; temporary until they are.
      { source: "/industries", destination: "/industry", permanent: false },
      { source: "/insights", destination: "/blog", permanent: false },
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
