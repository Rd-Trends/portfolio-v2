import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Screenshots contain small text, so they need a higher quality than the default 75.
    qualities: [75, 90],
  },
};

export default nextConfig;
