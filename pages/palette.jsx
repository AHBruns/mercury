import Head from "next/head";
import theme from "../constants/theme";

export const Palette = ({ theme }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="page-wrapper">
        <h1 className="description left-text-padding-fix">
          Author: Alex Bruns
        </h1>
        <h1 className="description">Last Edit Date: 01 / Feb / 2020</h1>
        <hr className="break" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="swatch primary-color color-white">
          Primary Color: {theme.colors.primary}
        </div>
        <div className="spacer" />
        <div className="swatch secondary-color dark-border color-black">
          Secondary Color: {theme.colors.secondary}
        </div>
        <div className="spacer" />
        <code>
          <pre className="code">{`// This is a code block.

int fib(int n) {
	int sum = 1;
	for (int i = n; i > 1; i--) {
		sum = sum * i;
	}
	return sum;
}

int main() {
	int x = fib(5);
	printf("fib 5 = %d\\n", x);
	return 0
}`}</pre>
        </code>
        <div className="spacer" />
        <p className="description">
          Font: Anonymous Pro,{" "}
          <a
            href="https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap"
            target="_blank"
          >
            https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap
          </a>
        </p>
        <div className="spacer" />
        <p className="description">
          Paragraph Text:
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890
        </p>
        <div className="spacer" />
        <h6 className="description">
          Header 6 Text:
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890
        </h6>
        <div className="spacer" />
        <h5 className="description">
          Header 5 Text:
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890
        </h5>
        <div className="spacer" />
        <h4 className="description">
          Header 4 Text:
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890
        </h4>
        <div className="spacer" />
        <h3 className="description">
          Header 3 Text:
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890
        </h3>
        <div className="spacer" />
        <h2 className="description">
          Header 2 Text:
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890
        </h2>
        <div className="spacer" />
        <h1 className="description">
          Header 1 Text:
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890
        </h1>
        <div className="spacer" />
        <button className="button button-primary">Button Primary</button>
        <div className="spacer" />
        <button className="button button-secondary">Button Secondary</button>
        <div className="spacer" />
        <button className="button button-primary mini-button">
          Mini Button Primary
        </button>
        <div className="spacer" />
        <button className="button button-secondary mini-button">
          Mini Button Secondary
        </button>
      </div>
      <style jsx global>{`
        body,
        html {
          margin: 0;
        }
      `}</style>
      <style jsx>{`
        .page-wrapper {
          margin: 16px;
          font-family: Anonymous Pro;
        }

        .description {
          margin: 0;
          padding: 0;
        }

        .spacer {
          height: 16px;
        }

        .break {
          height: 1px;
          border: none;
          background-color: black;
        }

        .swatch {
          height: 100px;
          border-radius: 10px;
          padding: 16px;
        }

        .code {
          padding: 16px;
          margin: 0;
          border: 1px solid black;
          border-radius: 10px;
          tab-size: 4;
          overflow: scroll;
        }

        .button {
          padding: 16px;
          border-radius: 16px;
          font-family: Anonymous Pro;
          font-weight: bolder;
          font-size: 25px;
          border: none;
          box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25),
            0 2px 5px -1px rgba(0, 0, 0, 0.5), inset 0 0 2px rgba(0, 0, 0, 0.25);
          cursor: pointer;
        }

        .button:hover {
          opacity: 0.95;
          box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25),
            0 2px 5px -1px rgba(0, 0, 0, 0.5),
            0 10px 15px -1px rgba(0, 0, 0, 0.1),
            inset 0 0 2px rgba(0, 0, 0, 0.25);
        }

        .button:focus {
          outline: none;
        }

        .button-primary {
          color: ${theme.colors.secondary};
          background-color: ${theme.colors.primary};
        }

        .button-secondary {
          color: ${theme.colors.primary};
          background-color: ${theme.colors.secondary};
        }

        .mini-button {
          padding: 16px;
          border-radius: 10px;
          font-size: 16px;
        }

        .dark-border {
          border: 1px solid black;
        }

        .color-white {
          color: white;
        }

        .color-black {
          color: black;
        }

        .left-text-padding-fix {
          padding-left: 2px;
        }
      `}</style>
      <style jsx>{`
        .primary-color {
          background-color: ${theme.colors.primary};
        }

        .secondary-color {
          background-color: ${theme.colors.secondary};
        }
      `}</style>
    </>
  );
};

Palette.getInitialProps = () => {
  return { theme };
};

export default Palette;
