import type { NextConfig } from "next";
import path from "node:path";

const projectRoot = path.resolve(".");
const isGithubPages = process.env.GITHUB_PAGES === "true";
// This must match the existing GitHub repository name until that repository is renamed.
const githubPagesBasePath = "/iconic-placo";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? githubPagesBasePath : "",
  },
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
