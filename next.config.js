const { withNextVideo } = require('next-video/process');
const createNextIntlPlugin = require('next-intl/plugin');

// Create the Next.js configuration
const nextConfig = {};

/** @type {import('next').NextConfig} */
const configWithVideo = withNextVideo(nextConfig);
const withNextIntl = createNextIntlPlugin();
const finalConfig = withNextIntl(configWithVideo);

module.exports = finalConfig;
