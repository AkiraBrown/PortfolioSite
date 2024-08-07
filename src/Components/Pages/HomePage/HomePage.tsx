import { NavLink } from "react-router-dom";
import { useState } from "react";
function HomePage() {
  const [projects] = useState([
    {
      id: 1,
      title: "PR1",
      description: "Some Text",
      img: "https://placehold.co/600x400",
    },
    {
      id: 2,
      title: "PR2",
      description: "Some Text",
      img: "https://placehold.co/600x400",
    },
    {
      id: 3,
      title: "PR3",
      description: "Some Text",
      img: "https://placehold.co/600x400",
    },
    {
      id: 4,
      title: "PR4",
      description: "Some Text",
      img: "https://placehold.co/600x400",
    },
    {
      id: 5,
      title: "PR5",
      description: "Some Text",
      img: "https://placehold.co/600x400",
    },
  ]);
  return (
    //   <h1>Junior Fullstack Engineer</h1>
    //   <p className="lead px-5">
    //     My name is Akira Brown, and I'm originally from New York, though I've
    //     recently moved here from London. My coding journey began with my older
    //     brother, who got me into learning how to remove viruses from my
    //     computer. This experience sparked my interest in computers, leading me
    //     to pursue a university degree in game development. After that, I
    //     returned to the US to complete the Pursuit fellowship, where I trained
    //     to become a full-stack software engineer.
    //   </p>
    //   <p className="lead px-5">
    //     Currently, I'm working on a full-stack web app that allows me to store
    //     markdown files on a backend server and display them on my portfolio
    //     site, showcasing my research and learning journey. I'm particularly
    //     passionate about backend development because it allows me to explore the
    //     intricate workings of computer systems and challenges my problem-solving
    //     creativity.
    //   </p>
    //   <p className="lead px-5">
    //     Additionally, I'm deeply interested in cybersecurity and the various
    //     methods developers use to protect against threats. What sets me apart is
    //     my curiosity about how computers and systems interact, which drives my
    //     passion for problem-solving and innovation in technology. I'm eager to
    //     start my career at your company and continue growing in this field.
    //   </p>
    //   <p className="lead">I'm passionate coder that loves to create!</p>
    // </main>
    <>
      {/* Test With images*/}
      <section className="bg-black text-white p-6 rounded-lg max-w-full font-mono col-span-2 md:col-span-2 min-h-screen">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">Photos</p>
        </div>
        <div
          className="bg-cover mt-4  pb-4 rounded p-10"
          style={{ backgroundImage: "url(/Assets/HomePic.png)", height: "90%" }}
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
      {/* AboutSec IN terminal */}
      <section className="bg-black text-white p-6 rounded-lg max-w-full font-mono col-span-1 md:col-span-2 justify-center items-center min-h-screen">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">Terminal</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400 mb-6">$ Tell me about yourself.</p>
          <p className="text-white">
            My name is Akira Brown, and I'm originally from New York, though
            I've moved back to New York from London. My coding journey began
            with my older brother, who got me into learning how to remove
            viruses from my computer. This experience sparked my interest in
            computers, leading me to pursue a universiy degree in Games
            Development. After that I returned to the US to complete in a
            fullstack web development bootcamp called Pursuit Fellowship, base
            out of Long Island City.
          </p>
        </div>
      </section>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen flex items-center justify-center col-span-1 md:col-span-2"
        style={{ backgroundImage: "url(/Assets/HomePic.png)" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome To My Portfolio</h1>
          <p className="text-xl mb-8">Showcasing my work</p>
          <NavLink
            className="bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-600"
            to={"/projects"}
          >
            View My Work
          </NavLink>
        </div>
      </section>
      {/* About Section*/}
      <section className="py-12 bg-gray-800 col-span-1 md:col-span-2">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
          <p>
            My name is Akira Brown, and I'm originally from New York, though
            I've recently moved here from London. My coding journey began with
            my older brother, who got me into learning how to remove viruses
            from my computer. This experience sparked my interest in computers,
            leading me to pursue a university degree in game development. After
            that, I returned to the US to complete the Pursuit fellowship, where
            I trained to become a full-stack software engineer.
          </p>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="py-12 bg-gray-900 col-span-1 md:col-span-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
/*<aside class="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
  <div class="flex justify-between items-center">
    <div class="flex space-x-2 text-red-500">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <p class="text-sm">bash</p>
  </div>
  <div class="mt-4">
    <p class="text-green-400">$ npm install next</p>
    <p class="text-white">+ next@10.2.3</p>
    <p class="text-white">added 1 package, and audited 2 packages in 3s</p>
    <p class="text-green-400">$</p>
  </div>
</aside>
 */

export default HomePage;
