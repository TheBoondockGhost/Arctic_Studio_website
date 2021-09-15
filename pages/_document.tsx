import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const fontsUrl = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap';
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="The Next generation of a news feed"
          />
          <link href={fontsUrl} rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favIco/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favIco/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favIco/favicon-16x16.png" />
          <link rel="manifest" href="/images/favIco/site.webmanifest" />
          {this.props.styles}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
