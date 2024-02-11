/** @type {import('next').NextConfig} */
// next.config.mjs


const nextConfig = {
  images: {
    domains: ['example.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
