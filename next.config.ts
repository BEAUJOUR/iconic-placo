import type { NextConfig } from "next";
import path from "node:path";

const projectRoot = path.resolve(".");

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
