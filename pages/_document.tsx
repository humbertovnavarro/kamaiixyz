import Document, { Main, DocumentContext, Head, Html, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body className="bg-primary text-light">
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
