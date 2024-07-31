function HomePage() {
  return (
    <main className="px-3 mt-5">
      <img
        src={"/Assets/HomePic.png"}
        style={{
          borderRadius: 200,
          maxHeight: 300,
          maxWidth: 300,
          objectFit: "cover",
          objectPosition: "50 50",
        }}
        alt="Home"
        className="img-fluid m-5 text-center"
      />
      <h1>Junior Fullstack Engineer</h1>
      <p className="lead px-5">
        My name is Akira Brown, and I'm originally from New York, though I've
        recently moved here from London. My coding journey began with my older
        brother, who got me into learning how to remove viruses from my
        computer. This experience sparked my interest in computers, leading me
        to pursue a university degree in game development. After that, I
        returned to the US to complete the Pursuit fellowship, where I trained
        to become a full-stack software engineer.
      </p>
      <p className="lead px-5">
        Currently, I'm working on a full-stack web app that allows me to store
        markdown files on a backend server and display them on my portfolio
        site, showcasing my research and learning journey. I'm particularly
        passionate about backend development because it allows me to explore the
        intricate workings of computer systems and challenges my problem-solving
        creativity.
      </p>
      <p className="lead px-5">
        Additionally, I'm deeply interested in cybersecurity and the various
        methods developers use to protect against threats. What sets me apart is
        my curiosity about how computers and systems interact, which drives my
        passion for problem-solving and innovation in technology. I'm eager to
        start my career at your company and continue growing in this field.
      </p>
      <p className="lead">I'm passionate coder that loves to create!</p>
    </main>
  );
}

export default HomePage;
