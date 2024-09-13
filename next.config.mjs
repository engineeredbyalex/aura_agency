// next.config.mjs
export default {
    webpack(config) {
      // Add a rule for handling .svg files with SVGR
      config.module.rules.push({
        test: /\.svg$/, // Matches .svg files
        use: [
          {
            loader: '@svgr/webpack', // Use SVGR loader
            options: {
              icon: true, // Optional: Treat SVGs as icons
            },
          },
        ],
      });
  
      return config; // Return the updated config
    },
  };
  