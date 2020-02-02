import Head from "next/head";
import theme from "../constants/theme";

export const Button = ({ compressed, secondary, download, children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <button className="button" onClick={() => window.open(download)}>
        {children}
      </button>
      <style jsx>{`
        .button {
          border: none;
          font-family: Anonymous Pro;
          cursor: pointer;
          box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.25),
            0 3px 8px 0 rgba(0, 0, 0, 0.25), 0 1px 3px 0 rgba(0, 0, 0, 0.5);
          background-color: ${secondary
            ? theme.colors.secondary
            : theme.colors.primary};
          color: ${secondary ? theme.colors.primary : theme.colors.secondary};
          font-size: ${compressed ? "16px" : "25px"};
          padding: ${compressed ? "10px" : "16px"};
          border-radius: ${compressed ? "10px" : "16px"};
        }

        .button:hover {
          opacity: 0.95;
          ${compressed
            ? ""
            : `box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.15), 0 3px 8px 0 rgba(0, 0, 0, 0.15),
						0 1px 3px 0 rgba(0, 0, 0, 0.4);`}
        }

        .button:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Button;
