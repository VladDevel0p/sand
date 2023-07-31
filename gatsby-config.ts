import type { GatsbyConfig } from "gatsby";

// @ts-ignore
const config: GatsbyConfig = {
  siteMetadata: {
    description: 'Продажа и доставка песка, щебня, пгс по г. Минск и области.',
    title: `Sand Landing`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  plugins: [
      "gatsby-plugin-sass",
      //@ts-ignore
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sand-landing`,
        short_name: `sand`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        icon: `src/utils/maz.svg`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    }
  ]
};
export default config;
