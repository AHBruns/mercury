import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body,
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        a,
        button {
          font-family: Anonymous Pro;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          overflow-x: hidden;
        }

        .button:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}

export default MyApp;
