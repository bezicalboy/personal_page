/** @type {import('next').NextConfig} */
const nextConfig = {
  // On Vercel, next/image auto-resizes and serves these modern formats.
  // AVIF is ~20-30% smaller than WebP, so prefer it first.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Strip the X-Powered-By header (tiny win, cleaner responses).
  poweredByHeader: false,
  // Gzip/brotli is handled by Vercel, but keep this on for any other host.
  compress: true,
};

export default nextConfig;
