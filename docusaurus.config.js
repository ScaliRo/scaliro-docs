// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ScaliRo',
  tagline: 'ScaliRo documentation',
  url: 'https://github.com/ScaliRo',  //??
  baseUrl: '/scaliro-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-96x96.png',
  organizationName: 'ScaliRo', // Usually your GitHub org/user name.
  projectName: 'scaliro-docs', // Usually your repo name.
  trailingSlash: false,
  // ??? presets: [
    // [
      // 'classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      // ({
        // docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          // // Please change this to your repo.
          // editUrl: 'https://github.com/ScaliRo/scaliro-docs',
        // },
        // blog: {
          // showReadingTime: true,
          // // Please change this to your repo.
          // editUrl:
            // 'https://github.com/ScaliRo/scaliro-docs',
        // },
        // theme: {
          // customCss: require.resolve('./src/css/custom.css'),
        // },
      // }),
    // ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
		defaultMode: 'light',
		disableSwitch: true
	  },
	  navbar: {
        title: 'ScaliRo Docs',
		hideOnScroll: true,
        logo: {
          alt: 'ScaliRo Logo',  //???
          src: '/img/logo.png',
		  //scrDark: '' ,
		  href: '/'
		  target: '_self',
		  //width: 
		  //height:
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
			label: 'Guide'
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
            // href: 'https://github.com/ScaliRo/scaliro-docs',
            // label: 'GitHub',
            // position: 'right',
          // },
		  {
          type: 'doc',
          docId: 'components',
          label: 'Components',
          position: 'left',
		  },
		  {
          type: 'search',
          position: 'right',
		  },
		  {
			label: 'Community',
			position: 'right',
			items: [
			 {
              href: 'https://scaliro.de/',
              label: 'Home',
              target: '_blank',
              rel: null,
             },
			],
			className: 'navbar__link--community',
		  },
		  {
			label: 'Support',
			position: 'right',
			items: [
			 {
              href: 'https://scaliro.de/',
              label: 'Help Center',
              target: '_blank',
              rel: null,
			 },
			],
            className: 'navbar__link--support',
          },
		  {
            type: 'separator',
			position: 'right',
		  },
		  {
			type: 'localeDropdown',
			position: 'right',
			dropdownItemsBefore: [],
			dropdownItemsAfter: [
             {
              href: 'https://scaliro.de',
										//???
              label: 'Translate',
              target: '_blank',
              rel: null,
             },
            ],
            className: 'icon-link language navbar__item',
          },
          {
			type: 'iconLink',
			position: 'right',
			icon: {
				alt: 'facebook logo',
				src: `/img/f_logo_RGB-Grey_58.png`,
				href: 'https://facebook.com/scaliro', //???
				target: '_blank',
				},
		  },
          {
          type: 'iconLink',
          position: 'right',
          icon: {
				alt: 'github logo',
				src: `/img/github.svg`,
				href: 'https://github.com/ScaliRo',  //???
				target: '_blank',
				},
          },
        ],
	  },
      footer: {
        style: 'dark',
        logo: {
        alt: 'ScaliRo logo',
        src: '/img/logo.png',
        href: 'https://scaliro.de',  //???
      },
		links: [
          {
            title: 'Get started',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/scaliro',  //???
              }
            ],
          },
          {
            title: 'More',
            items: [
              // {
                // label: 'Blog',
                // to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/ScaliRo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScaliRo. All rights reserved.`, //??? ScaliRo and their logo are registerd trademarks of ScaliRo Ltd. ????
      },
      prism: {
	  theme: plain: {}, styles [] }, //??lightCodeTheme,
        //darkTheme: darkCodeTheme,
		additionalLanguages: ['shell-session', 'http'],
		// https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      },
	  // Mögliche Ankuendigungsleiste oben
	  // announcementBar: {
      // id: 'ScaliRof20220502', // Any value that will identify this message.
      // content: '<p class="text"> RedisDays Available Now On-Demand. </p> <a href="https://redis.com/redisdays/" target="_blank" rel="noopener" class="btn">Learn More</a>',
      // //  content: '<p class="text"></p> <a href="https://scaliro.de" target="_blank" rel="noopener" class="btn"></a>',
      // backgroundColor: '#fff', // Defaults to `#fff`.
      // textColor: '#000', // Defaults to `#000`.
      // isCloseable: true, // Defaults to `true`.
    },
    }),
};

module.exports = config;
