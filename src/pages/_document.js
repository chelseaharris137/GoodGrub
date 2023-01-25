import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () =>{
  return (
    <Html lang="eng">
    <Head>
      <link href="https://fonts.googleapis.com/css2?amily=Anton:wght@400&family=Poppins:wght@400&display=swap" 
      rel="stylesheet" />
    </Head>

    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
  );
}

export default MyDocument;
