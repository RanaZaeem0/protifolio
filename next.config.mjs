// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // forces `next build` to also run `next export`
  images: {
    unoptimized: true, // disables Image Optimization (not supported on GitHub Pages)
  },
};

export default nextConfig;
