import React from "react";

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export default ({ skills }) => {
  shuffle(skills);
  return (
    <div>
      <div className="flex flex-col justify-center w-full max-w-6xl px-2 pt-10 mx-auto">
        <h1 className="text-4xl font-bold text-center">My Skills</h1>
        <p className="pt-3 text-justify">
          Below is a set of my skills. Everything listed, be it a language,
          framework, concept, or soft skill, is something that I've written a
          considerable amount of code in/using. Considerable means 5k+ LOC in
          this context. To be clear, many of these skills I've used to write far
          more than 5k LOC. I just used that as a cut-off to ensure what I
          listed were legitimate skills and not just things I'd heard of.
          Additionally, I really tried to stick to hard skills, things like{" "}
          <em>Team Player</em> and <em>Leader</em> are unmeasurable and
          therefore not worth listing in my opinion.
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full max-w-6xl px-2 pt-10 mx-auto">
        {skills.map((skill) => {
          return (
            <div className="p-2" key={skill.name}>
              <div className="px-2 py-1 bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-600 hover:shadow-lg">
                <h1>{skill.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      skills: [
        {
          name: "React",
          tags: ["JS", "Framework", "Web"],
        },
        {
          name: "NextJS",
          tags: ["JS", "Framework", "Web"],
        },
        {
          name: "Tailwind CSS",
          tags: ["CSS", "Framework", "Web"],
        },
        {
          name: "NodeJS",
          tags: ["JS", "NodeJS", "Language", "Web"],
        },
        {
          name: "ExpressJS",
          tags: ["JS", "NodeJS", "Language", "API"],
        },
        {
          name: "MongoDB",
          tags: ["Database"],
        },
        {
          name: "Mongoose",
          tags: ["Database", "ORM", "NodeJS"],
        },
        {
          name: "Javascript",
          tags: ["JS", "Language", "Web"],
        },
        {
          name: "CSS3",
          tags: ["CSS", "Language", "Web"],
        },
        {
          name: "HTML5",
          tags: ["HTML", "Language", "Web"],
        },
        {
          name: "Elm",
          tags: ["Language", "Web"],
        },
        {
          name: "SSR",
          tags: ["Web", "Concept"],
        },
        {
          name: "SSG",
          tags: ["Web", "Concept"],
        },
        {
          name: "PWA",
          tags: ["Web", "Concept", "JS"],
        },
        {
          name: "Vue",
          tags: ["Web", "Framework", "JS"],
        },
        {
          name: "Angular",
          tags: ["Web", "Framework", "JS"],
        },
        {
          name: "Utility CSS",
          tags: ["Web", "Concept", "CSS"],
        },
        {
          name: "Python 3",
          tags: ["Language", "Python"],
        },
        {
          name: "Python 2",
          tags: ["Language", "Python"],
        },
        {
          name: "Flask",
          tags: ["API", "Python", "Web", "Framework"],
        },
        {
          name: "Django",
          tags: ["API", "Python", "Web", "Framework"],
        },
        {
          name: "Tailwind UI",
          tags: ["Web", "CSS", "Framework", "HTML"],
        },
        {
          name: "Material UI",
          tags: ["Web", "JS", "Framework"],
        },
        {
          name: "JSX",
          tags: ["JS", "Language"],
        },
        {
          name: "JAM Stack",
          tags: ["JS", "Web", "Concept"],
        },
        {
          name: "MERN Stack",
          tags: ["Web", "JS", "NodeJS", "Concept", "Database"],
        },
        {
          name: "LAMP Stack",
          tags: ["Web", "Concept"],
        },
        {
          name: "AWS",
          tags: ["Platform", "Web"],
        },
        {
          name: "AWS Lambda",
          tags: ["Platform", "Web", "API"],
        },
        {
          name: "Serverless",
          tags: ["Concept", "Web", "API"],
        },
        {
          name: "Microservices",
          tags: ["Concept", "Web", "API"],
        },
        {
          name: "REST",
          tags: ["Framework", "Web", "API"],
        },
        {
          name: "GraphQL",
          tags: ["Framework", "Web", "API"],
        },
        {
          name: "gRPC",
          tags: ["Framework", "Web", "API"],
        },
        {
          name: "Hashura",
          tags: ["Platform", "API", "Database", "Web"],
        },
        {
          name: "FaunaDB",
          tags: ["Platform", "Database", "API", "Web"],
        },
        {
          name: "C",
          tags: ["Language"],
        },
        {
          name: "C++",
          tags: ["Language"],
        },
        {
          name: "C#",
          tags: ["Language"],
        },
        {
          name: ".NET",
          tags: ["Framework"],
        },
        {
          name: "React Native",
          tags: ["Framework", "JS"],
        },
        {
          name: "Xamarin",
          tags: ["Framework"],
        },
        {
          name: "WPF",
          tags: ["Framework"],
        },
        {
          name: "MVVM",
          tags: ["Concept", "Framework"],
        },
        {
          name: "MVC",
          tags: ["Concept", "Web"],
        },
        {
          name: "Swift",
          tags: ["Language"],
        },
        {
          name: "Redux",
          tags: ["Framework", "JS", "Web"],
        },
        {
          name: "SWR",
          tags: ["Framework", "JS", "Web"],
        },
        {
          name: "Apollo GraphQL",
          tags: ["Framework", "JS", "Web"],
        },
        {
          name: "OCaml",
          tags: ["Language"],
        },
        {
          name: "Standard ML",
          tags: ["Language"],
        },
        {
          name: "x86 ASM",
          tags: ["Language"],
        },
        {
          name: "YACC",
          tags: ["Framework"],
        },
        {
          name: "Flex",
          tags: ["Framework"],
        },
        {
          name: "Functional Programming",
          tags: ["Concept"],
        },
        {
          name: "Scala",
          tags: ["Language"],
        },
        {
          name: "Java (8+)",
          tags: ["Language"],
        },
        {
          name: "Protobuff",
          tags: ["Framework"],
        },
      ],
    },
  };
};
