/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [{
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/octopussy.svg'.
    image: '/img/octopussy.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
}, ];

const siteConfig = {
    title: 'DeepNLPF', // Title for your website.
    tagline: 'A Framework for Integrating Linguistic Analysis and Semantic Annotation of Text Documents.',
    url: 'https://deepnlpf.github.io', // Your website URL
    baseUrl: '/site/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'site',
    organizationName: 'deepnlpf',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { doc: 'about', label: 'DOC' },
        { doc: 'plugins', label: 'PLUGINS' },
        { doc: 'api', label: 'API' },
        //{ page: 'demo', label: 'DEMO' },
        { page: 'help', label: 'HELP' },
        //{ blog: true, label: 'BLOG' },
        //{ page: 'worldwide', label: 'WORLDWIDE' },
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: 'img/octopussy_white.png',
    footerIcon: 'img/octopussy_white.png',
    favicon: 'img/favicon2.png',

    /* Colors for website */
    colors: {
        primaryColor: '#622F7E',
        secondaryColor: '#B343B3',
    },

    /* Custom fonts for website */
    /*
    fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },
    */

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} DeepNLPF.`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    ogImage: 'img/octopussy.svg',
    twitterImage: 'img/octopussy.svg',

    // Show documentation's last contributor's name.
    // enableUpdateBy: true,

    // Show documentation's last update time.
    // enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;