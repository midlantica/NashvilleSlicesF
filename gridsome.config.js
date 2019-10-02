// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Nashville Slices",
  siteUrl: `https://www.nashvilleslices.com`,
  host: "0.0.0.0",
  titleTemplate: "%s - NashvilleSlices",
  siteDescription: "Nashville slices of life",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.pug',
          './src/**/*.md',
          './src/**/*.css'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }
    }
  ],
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 24, 32, 48, 64, 72, 96, 114, 120, 144, 152, 180],
    },
    touchicon: {
      src: './src/favicon.png',
      sizes: [76, 152, 120, 167, 152, 180],
      precomposed: true,
    },
  },
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
