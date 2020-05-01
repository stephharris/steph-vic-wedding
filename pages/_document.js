import Document, { Html, Head, Main, NextScript } from 'next/document';

class PageWrapper extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Ramaraja&display=swap" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,500;1,300;1,500&display=swap" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PageWrapper;
