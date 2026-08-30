import type { NextConfig } from 'next';

// This portfolio has no server-only routes, so emit complete static HTML for
// hosts such as Vercel instead of requiring the vinext worker at runtime.
const nextConfig: NextConfig = {
  output: 'export',
};

export default nextConfig;
