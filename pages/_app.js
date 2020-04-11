import React from "react";
import Header from "../components/Header";
import "../tailwind.css";

// TODO: place in getStaticProps once NextJS supports it
const staticProps = {
  navBar: [
    { text: "Home", href: "/" },
    { text: "Portfolio", href: "/portfolio" },
    // { text: "Projects", href: "/projects" },
    // { text: "Tools", href: "/tools" },
    { text: "My Résumé", href: "/resume.pdf" },
    // { text: "Contact Me", href: "/contact-me" },
  ],
};

export default ({ Component, pageProps }) => {
  return (
    <>
      <Header data={staticProps.navBar} />
      <Component {...pageProps} />
    </>
  );
};
