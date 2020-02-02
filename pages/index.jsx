import { useState, useEffect } from "react";
import Header from "../components/Header";
import anime from "../node_modules/animejs/lib/anime.es.js";

export const Index = ({}) => {
  const toolNames = [
    "C",
    "C++",
    "Python 3",
    "Python 2",
    "Java 8+",
    "OCaml",
    "Javascript",
    "HTML",
    "CSS",
    "Scala",
    "Standard ML",
    "Elm",
    "Reason ML",
    "Prolog",
    "Pascal",
    "x86",
    "React JS",
    "Redux",
    "Bootstrap",
    "Material UI",
    "React Boostrap",
    "Ant Design",
    "Next JS",
    "Now",
    "Styled Components",
    "Circle CI",
    "Google Maps APIs",
    "Map Box APIs",
    "Auth0 APIs",
    "MongoDB Atlas",
    "Mongoose",
    "Express JS",
    "JWTs",
    "Scorex",
    "Windows",
    "MacOS",
    "Ubuntu Linux",
    "Kali Linux",
    "SSH",
    "Test Driven Development",
    "Agile Development",
    "Waterfall Development",
    "UML",
    "Database Migrations",
    "SQL",
    "MySQL",
    "NoSQL Database Design",
    "Requirements Gathering",
    "Project Quoting",
    "Legacy Code Maintenance",
    "Git",
    "GitHub",
    "Flask",
    "JUnit",
    "Python Unittest",
    "Jest",
    "Puppeteer",
    "End-To-End Testing",
    "Integration Testing",
    "Unit Testing"
  ];

  const memojis = [
    "/memoji-mushroom-cloud.png",
    "/memoji-shit.png",
    "/memoji-idk.png",
    "/memoji-sleep.png",
    "/memoji-thinking.png",
    "/memoji-thumbs-up.png"
  ];
  const [carouselFlag, setCarouselFlag] = useState(false);

  if (typeof document !== "undefined" && !carouselFlag) {
    console.log("anime time!");
    let timeline = anime.timeline({
      easing: "easeInOutSine",
      loop: true
    });
    timeline
      .add({
        targets: ".memoji-0",
        translateX: ["-150vw", "0vw"],
        scale: ["0", "1"]
      })
      .add(
        {
          targets: ".memoji-0",
          translateX: "150vw",
          scale: "0"
        },
        "+=2000"
      )
      .add({
        targets: ".memoji-1",
        translateX: ["-150vw", "0vw"],
        scale: ["0", "1"]
      })
      .add(
        {
          targets: ".memoji-1",
          translateX: "150vw",
          scale: "0"
        },
        "+=2000"
      )
      .add({
        targets: ".memoji-2",
        translateX: ["-150vw", "0vw"],
        scale: ["0", "1"]
      })
      .add(
        {
          targets: ".memoji-2",
          translateX: "150vw",
          scale: "0"
        },
        "+=2000"
      )
      .add({
        targets: ".memoji-3",
        translateX: ["-150vw", "0vw"],
        scale: ["0", "1"]
      })
      .add(
        {
          targets: ".memoji-3",
          translateX: "150vw",
          scale: "0"
        },
        "+=2000"
      )
      .add({
        targets: ".memoji-4",
        translateX: ["-150vw", "0vw"],
        scale: ["0", "1"]
      })
      .add(
        {
          targets: ".memoji-4",
          translateX: "150vw",
          scale: "0"
        },
        "+=2000"
      )
      .add({
        targets: ".memoji-5",
        translateX: ["-150vw", "0vw"],
        scale: ["0", "1"]
      })
      .add(
        {
          targets: ".memoji-5",
          translateX: "150vw",
          scale: "0"
        },
        "+=2000"
      );
    setCarouselFlag(true);
  }

  return (
    <>
      <Header />
      <div className="carousel-wrapper">
        {memojis.map((memoji, index) => (
          <img key={memoji} src={memoji} className={`memoji memoji-${index}`} />
        ))}
        <h1 className="header-seq">Hey, I'm Alex</h1>
      </div>
      <div className="intro-wrapper">
        <h1>Introduction</h1>
        <div className="spacer" />
        <p className="intro-body">
          My name is <strong>Alex Bruns</strong>. I'm a{" "}
          <strong>full-stack software engineer</strong> (but, like, actually)
          and an <strong>undergraduate</strong> at the University of Minnesota -
          Twin Cities. I'm on track to graduate with{" "}
          <strong>B.S. in Computer Science</strong> in{" "}
          <strong>December of 2020</strong>. During my time as a student I've
          been working at a financial technology startup (part-time during the
          school year & full-time during the summer). This means I will be{" "}
          <strong>graduating with ~3 years of industry experience</strong> on
          top of the countless hours of programming I've done for both personal
          projects and school.
        </p>
        <br />
        <p className="intro-body">
          Speaking of personal projects, I devote a considerable portion of my
          time to personal programming projects. Many of these project can be
          found on my{" "}
          <a href="https://github.com/AHBruns" target="_blank">
            GitHub
          </a>
          , but to give you a taste, I've done everything from writing my own
          programming language and associated interpreter to making thousands of
          dollars in profit off of a homemade automated arbitrage program.
        </p>
      </div>
      <div className="languages-wrapper">
        <h1>My Toolkit</h1>
        <div className="mini-spacer" />
        <h6>
          aka stuff that I've written considerable amounts of code, more than
          5,000 lines, in/using
        </h6>
        <div className="spacer" />
        <div className="tools">
          {toolNames.sort().map(name => (
            <span key={name} className="tool">
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="footer-spacer" />
      <img key="footer-memoji" src={memojis[2]} className="footer-memoji" />
      <h6 className="footer-text">Alex Bruns, 2020</h6>
      <style jsx>{`
        .carousel-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: calc(68px * 2);
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 1em);
        }

        .tool {
          padding: 8px 16px;
          margin: 8px;
          border: 1px solid black;
          border-radius: 16px;
          cursor: default;
        }

        .tool:hover {
          background-color: rgba(200, 50, 50, 0.2);
        }

        .tools {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .mini-spacer {
          height: 8px;
        }

        .languages-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1064px;
          padding: 32px;
          text-align: center;
          margin: auto;
        }

        .intro-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1064px;
          padding: 32px;
          text-align: center;
          margin: auto;
          margin-top: calc(68px * 4 + 5em + 421px);
        }

        .intro-body {
          text-align: justify;
        }

        strong {
          color: rgba(200, 50, 50, 1);
        }

        a {
          position: relative;
          text-decoration: none;
          color: black;
        }

        a::after {
          content: "";
          background-color: rgba(200, 50, 50, 0.2);
          position: absolute;
          bottom: 4px;
          top: 6px;
          left: -5px;
          right: -5px;
          transform: rotateZ(-5deg);
          transition: all ease 0.3s;
        }

        a:hover::after {
          background-color: rgba(200, 50, 50, 0.5);
          transition: all ease 0.3s;
        }

        .spacer {
          height: 16px;
        }

        .memoji {
          opacity: 1;
          position: absolute;
          top: calc(68px + 5em);
          filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5))
            drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.75));
        }

        .header-seq {
          font-size: 5em;
          font-weight: bolder;
          text-align: center;
        }

        .footer-spacer {
          height: 75px;
        }

        .footer-memoji {
          height: 76px;
          margin-left: calc(50vw - 38px);
          margin-bottom: -16px;
        }

        .footer-text {
          text-align: center;
          padding: 16px;
        }
      `}</style>
    </>
  );
};

export default Index;
