import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html
        lang="en"
      >
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="//cdn.quilljs.com/1.2.6/quill.snow.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
