import type { NextConfig } from "next";

const BASE_PATH = "/govinda-portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? BASE_PATH : "",
  assetPrefix: isProd ? `${BASE_PATH}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;