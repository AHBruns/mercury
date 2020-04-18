import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import "../tailwind.css";

// TODO: place in getStaticProps once NextJS supports it
const staticProps = {
  navBar: [
    { text: "Home", href: "/" },
    { text: "Skills", href: "/skills" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Résumé", href: "/alex-bruns-resume.pdf" },
    { text: "Contact Me", href: "/contact-me" },
  ],
  projects: [
    { text: "Conway's Game of Life", href: "/game-of-life" },
    { text: "Conway's Game of Life 2.0", href: "/game-of-life-2.0" },
  ],
};

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Alex Bruns</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header data={staticProps.navBar} projects={staticProps.projects} />
        <Component {...pageProps} />
        <script> </script>
      </div>
    </>
  );
};
