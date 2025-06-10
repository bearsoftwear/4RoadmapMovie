/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('http://www.impawards.com/**')],
  },
};

export default nextConfig;
