module.exports = {
  reactStrictMode: false,
  // assetPrefix: process.env.NODE_ENV === "production" ? "." : undefined,
  // exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   return {
  //     "/": { page: "/" },
  //   };
  // },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
};
