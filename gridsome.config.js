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
        route: '/projects/:year/:month/:day/:slug',
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [
            [ '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : ['Youtube', 'Twitter', 'Gist', 'Giphy', 'Spotify'],
            }],
            ['gridsome-plugin-remark-youtube']
          ]
        },
      }
    },
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     typeName: 'JournalPost', // Required
    //     baseDir: './journals', // Where .md files are located
    //     pathPrefix: '/journals', // Add route prefix. Optional
    //     template: './src/templates/JournalPost.vue' // Optional
    //   }
    // },
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
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'NashvilleSlices.com',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        shortName: 'NashvilleSlices',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: './src/favicon.png' // must be supplied!
      }
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  },
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
};
