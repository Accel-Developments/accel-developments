import React from "react";
import path from 'path'



export default {
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      }]
    ,"react-static-plugin-svg", "react-static-plugin-styled-components", "react-static-plugin-reach-router", "react-static-plugin-sitemap",
  ],

  Document: ({
               Html,
               Head,
               Body,
               children,
               state: { siteData, renderMeta },
             }) => (
      <Html lang="en-US">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Gcnetwiz Investments</title>
        </Head>
        <Body>{children}</Body>
      </Html>
  ),
  devServer: {
    port: 1234,
    host: '127.0.0.1',
  }
}
