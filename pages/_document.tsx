import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from "next/document";

export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) 
            })

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        const description = 'super site';
        const fontsUrl = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap';

        return (
            <Html>
                <Head>
                    <meta name="description" content={description} />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href={fontsUrl} rel="stylesheet" />
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}