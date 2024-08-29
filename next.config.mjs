/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Add 'canvas' to externals array
      config.externals = [
        ...config.externals,
        { canvas: 'canvas' },
      ];
  
      return config;
    },
  };
  
  export default nextConfig;
  