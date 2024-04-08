import Document, { Head, Main, NextScript } from "next/document";

class myDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="description" content="An Online Note Taking Apllication" />
                    <meta charSet="utf-8" />
                    <meta name="robots" content="nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                </Head >
                <body>
                    <Main />
                    <NextScript />
                </body>

            </html>
        )
    }
}

export default myDocument;
