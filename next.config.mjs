/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co.com", "i.ibb.co", "randomuser.me"],
    qualities: [100],
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default nextConfig;
