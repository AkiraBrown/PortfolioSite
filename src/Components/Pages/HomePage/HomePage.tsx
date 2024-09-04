import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Project } from "./types/HomePageTypes";
function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    FetchData();
  }, []);
  async function FetchData() {
    try {
      const response = await axios.get(
        "https://api.github.com/users/akirabrown/repos"
      );
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  // const [projects] = useState([
  //   {
  //     id: 1,
  //     title: "PR1",
  //     description: "Some Text",
  //     img: "https://placehold.co/600x400",
  //   },
  //   {
  //     id: 2,
  //     title: "PR2",
  //     description: "Some Text",
  //     img: "https://placehold.co/600x400",
  //   },
  //   {
  //     id: 3,
  //     title: "PR3",
  //     description: "Some Text",
  //     img: "https://placehold.co/600x400",
  //   },
  //   {
  //     id: 4,
  //     title: "PR4",
  //     description: "Some Text",
  //     img: "https://placehold.co/600x400",
  //   },
  //   {
  //     id: 5,
  //     title: "PR5",
  //     description: "Some Text",
  //     img: "https://placehold.co/600x400",
  //   },
  // ]);

  return (
    <>
      <section className="bg-black text-white p-6 rounded-lg max-w-full font-mono col-span-2 md:col-span-2 min-h-screen animate-fade-up">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">Preview</p>
        </div>
        <div
          className="bg-cover mt-4  pb-4 rounded p-10"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dybgevnp0/image/upload/v1723647464/HomePic_qbvxys.png)",
            height: "90%",
          }}
        >
          <div className="bg-black bg-opacity-50 p-10 rounded text-center h-full">
            <h1 className="text-5xl font-bold mb-4">Welcome To My Portfolio</h1>
            <p className="text-xl mb-8">Showcasing my work</p>
            <NavLink
              className="bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-600"
              to={"/projects"}
            >
              View My Work
            </NavLink>
          </div>
        </div>
      </section>
      <section className="bg-black text-white p-6 rounded-lg max-w-full font-mono col-span-1 md:col-span-2 justify-center items-center min-h-screen animate-fade-up">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">Terminal</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400 mb-6 animate-fade-up ">
            $ Tell me about yourself<span className="animate-ping">.</span>
          </p>
          <p className="text-white mb-6 animate-fade-up ">
            My name is Akira Brown, and I'm originally from New York, though
            I've moved back to New York from London. My coding journey began
            when my older sibling, got me into learning how to remove viruses
            from my computer. This experience sparked my interest in computers,
            leading me to pursue a university degree in Games Development. After
            that, I returned to the <span className="text-yellow-500">US</span>{" "}
            to complete in a fullstack web development bootcamp called Pursuit
            Fellowship, based out of Long Island City.
          </p>
          <p className="text-green-400 mb-6 animate-fade-up ">
            $ What are you working on<span className="animate-ping">.</span>
          </p>
          <p className="text-white mb-6 animate-fade-up">
            Currently, I'm working on a full-stack web app that allows me to
            store markdown files on a backend server and display them on my
            portfolio site, showcasing my research and learning journey. I'm
            particularly passionate about backend development because it allows
            me to explore the intricate workings of computer systems and
            challenges my problem-solving creativity.
          </p>
        </div>
      </section>
      <section className="py-12 bg-gray-900 col-span-1 md:col-span-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-auto">
            {projects.map((element, idx) => (
              <div
                key={element?.id || idx}
                className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden`}
              >
                <img
                  src={"https://placehold.co/600x400"}
                  alt={element.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{element.name}</h3>
                  {element.description && (
                    <p className="mt-2 text-gray-400">{element.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
