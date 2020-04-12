import React, { useState } from "react";

export default ({ skills, tags }) => {
  const [pickedTags, setPickedTags] = useState([]);
  const [unpickedTags, setUnpickedTags] = useState([...tags]);
  const [filteringIsOpen, setFilteringIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-center w-full max-w-6xl px-4 pt-10 mx-auto text-gray-900 sm:px-10">
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
      <div className="flex flex-col justify-center w-full max-w-6xl px-4 pt-10 mx-auto sm:px-10">
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-2xl">
          <div className="flex items-center py-1">
            <button
              className="inline-block pl-1 text-gray-900 focus:outline-none"
              onClick={() => setFilteringIsOpen(!filteringIsOpen)}
            >
              {filteringIsOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="p-1"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="p-1"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <h1 className="font-semibold text-gray-900">&nbsp;Filter</h1>
          </div>
          {filteringIsOpen && (
            <>
              <div className="flex flex-wrap px-1 pt-3 pb-1">
                {pickedTags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 m-1 text-white bg-gray-900 rounded-lg cursor-pointer hover:shadow-lg hover:bg-gray-800"
                    onClick={() => {
                      const newPickedTags = new Set(pickedTags);
                      newPickedTags.delete(tag);
                      setPickedTags([...newPickedTags]);
                      setUnpickedTags([...unpickedTags, tag]);
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <hr className="mx-2 mt-2 mb-3 border-b border-gray-900 rounded-full border-1" />
              <div className="flex flex-wrap px-1 pb-1">
                {unpickedTags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 m-1 text-white bg-gray-900 rounded-lg cursor-pointer hover:shadow-lg hover:bg-gray-800"
                    onClick={() => {
                      const newUnpickedTags = new Set(unpickedTags);
                      newUnpickedTags.delete(tag);
                      setUnpickedTags([...newUnpickedTags]);
                      setPickedTags([...pickedTags, tag]);
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full max-w-6xl px-4 pt-10 mx-auto sm:px-10">
        {skills
          .filter((skill) => {
            if (pickedTags.length === 0) return true;
            const tags = new Set(skill.tags);
            return pickedTags.reduce(
              (acc, pickedTag) => tags.has(pickedTag) && acc,
              true
            );
          })
          .map((skill) => {
            return (
              <div className="p-2" key={skill.name}>
                <div className="px-2 py-1 text-gray-900 bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:bg-blue-600 hover:shadow-lg">
                  <h1>{skill.name}</h1>
                </div>
              </div>
            );
          })}
      </div>
      <div className="pt-10" />
    </div>
  );
};

export const getStaticProps = async () => {
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

  const skills = [
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
      tags: ["Database", "NodeJS"],
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
    {
      name: "SQL",
      tags: ["Language", "Database"],
    },
    {
      name: "MySQL",
      tags: ["Database"],
    },
    {
      name: "PostgressSQL",
      tags: ["Database"],
    },
    {
      name: "Scallion",
      tags: ["Language"],
    },
    {
      name: "Google Maps API",
      tags: ["Web"],
    },
    {
      name: "Bootstrap",
      tags: ["CSS", "Framework", "Web"],
    },
    {
      name: "OOP",
      tags: ["Concept"],
    },
    {
      name: "Logic Programming",
      tags: ["Concept"],
    },
    {
      name: "Prolog",
      tags: ["Language"],
    },
    {
      name: "Scheme",
      tags: ["Language"],
    },
    {
      name: "Azure",
      tags: ["Platform"],
    },
    {
      name: "Digital Ocean",
      tags: ["Platform"],
    },
    {
      name: "Now.sh",
      tags: ["Platform"],
    },
    {
      name: "VSCode",
      tags: ["IDE"],
    },
    {
      name: "WebStorm",
      tags: ["IDE"],
    },
    {
      name: "Jet Brains",
      tags: ["IDE"],
    },
    {
      name: "IntelliJ",
      tags: ["IDE"],
    },
    {
      name: "PyCharm",
      tags: ["IDE"],
    },
    {
      name: "Visual Studio",
      tags: ["IDE"],
    },
    {
      name: "Linux",
      tags: ["OS"],
    },
    {
      name: "Ubuntu",
      tags: ["OS"],
    },
    {
      name: "Debian",
      tags: ["OS"],
    },
    {
      name: "Open BSD",
      tags: ["OS"],
    },
    {
      name: "OSX",
      tags: ["OS"],
    },
    {
      name: "Windows",
      tags: ["OS"],
    },
    {
      name: "Postman",
      tags: ["API"],
    },
    {
      name: "NPM",
      tags: ["JS", "Web", "Platform"],
    },
  ];

  shuffle(skills);

  let tags = new Set();
  skills.forEach((skill) => {
    skill.tags.forEach((tag) => tags.add(tag));
  });
  tags = Array.from(tags);

  return {
    props: {
      skills,
      tags,
    },
  };
};
