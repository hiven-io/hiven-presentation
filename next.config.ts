import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/hiven-presentation",
  assetPrefix: "/hiven-presentation",
};

export default nextConfig;
