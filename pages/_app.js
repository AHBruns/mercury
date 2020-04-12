import React from "react";
import Header from "../components/Header";
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
};

export default ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header data={staticProps.navBar} />
      <Component {...pageProps} />
      <script> </script>
    </div>
  );
};
