import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "Online courses" links; inlined at build so the client header can use it.
  env: { LMS_COURSES_URL: new URL("/lms/courses", process.env.CRM_API_HOST || "https://icfc.digital").href },
  headers() {
    const year = [{ key: "Cache-Control", value: "public, max-age=31536000, stale-while-revalidate=86400" }];
    return [
      { source: "/:path*", headers: [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }] },
      // ponytail: public/ files aren't hashed; a changed file keeps its name, so rename it (or bump ?v=) to bust caches.
      { source: "/images/:path*", headers: year },
      { source: "/assets/:path*", headers: year },
    ];
  },
  redirects() {
    return [
      // One canonical host; www currently serves a duplicate copy.
      { source: "/:path*", has: [{ type: "host", value: "www.icfc.com.sg" }], destination: "https://icfc.com.sg/:path*", permanent: true },
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
    // app/global-not-found.tsx: the root layout is app/[lang], so unmatched URLs need their own 404 page.
    globalNotFound: true,
  },
};

export default nextConfig;
