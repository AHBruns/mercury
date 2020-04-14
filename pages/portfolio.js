import React from "react";
import EmbeddedWebPage from "../components/EmbeddedWebPage";
import Header from "../components/Header";

const Section = ({ title, src, github }) => (
  <div className="w-full max-w-6xl mt-20">
    <h1 className="block px-4 text-2xl font-semibold text-center text-gray-900">
      {title}
    </h1>
    <div className="flex justify-center">
      {github && (
        <a href={github} target="_blank">
          <button className="mt-2 mr-2 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 p-1"
            >
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </button>
        </a>
      )}
      <a>
        <button
          className="mt-2 mr-2 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-400"
          onClick={() =>
            alert(
              "Is this site broken? If so, please use my contact page to tell me. Thank you in advance."
            )
          }
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-8 h-8 p-1"
          >
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </button>
      </a>
      {src && (
        <a href={src} target="_blank">
          <button className="mt-2 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 p-1"
            >
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </button>
        </a>
      )}
    </div>
    <EmbeddedWebPage
      src={src}
      className="w-full mt-4 border-t-2 border-b-2 border-gray-900 border-solid rounded-none sm:border-none sm:shadow-2xl sm:rounded-lg"
    />
  </div>
);

export default ({}) => {
  return (
    <div>
      <div className="w-full max-w-6xl px-6 pt-20 mx-auto md:px-20">
        <h1 className="text-4xl font-bold text-center">Websites I've Built</h1>
        <p className="pt-3 text-justify">
          Below is a gallery of some of my previous work. These sites were built
          with varying technologies and over different periods of my life. So,
          the quality varies pretty drastically. I've linked to all the sites,
          and for sites whose code is not in a private repo, I've linked to the
          associated repo. Additionally, I think it's worth noting that these
          are <strong>not</strong> all the websites I've built, instead these
          are all the publicly accessible sites that I was the primary developer
          for. I've built many of other sites with large teams and/or for
          private use. Finally, I haven't taken the time to build it a
          broken-link checker (I know, I'm lazy). So, if a link is broken, I'm
          relying on you to let me know. Thanks in advance.
        </p>
      </div>
      <div className="z-0 flex flex-col items-center w-screen px-0 bg-gray-100 sm:px-10 md:px-20">
        <Section title="StarTab" src="https://startab.app/" />
        <Section
          title="Texas Coastal Exchange Dontation Portal"
          src="https://donate.texascoastalexchange.org"
        />
        <Section
          title="This Site (Inception!)"
          src="https://alexbruns.dev"
          github="https://github.com/ahbruns/mercury"
        />
        <div className="h-20" />
      </div>
    </div>
  );
};
