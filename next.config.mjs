import path from "path";
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  sassOptions: {
    includePaths: [path.join("./src/", "styles")],
  },
};

export default nextConfig;
