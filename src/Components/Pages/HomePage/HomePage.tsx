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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat,
        erat a eleifend lacinia, lacus nulla pretium odio, a ornare erat nibh a
        enim. Suspendisse posuere dolor sed venenatis finibus. Aliquam ut congue
        dui. Maecenas odio enim, luctus ut placerat quis, efficitur in ipsum.
        Cras orci mauris, euismod vitae lectus eget, vulputate cursus tellus.
        Fusce in justo a sem malesuada condimentum ut et nunc. Aenean a
        fringilla augue. Aenean id facilisis erat. Donec convallis mi hendrerit
        ornare malesuada. Donec efficitur justo eget lorem fermentum ornare.
        Praesent sit amet libero nec erat dictum rutrum.
      </p>
      <p className="lead">I'm passionate coder that loves to create!</p>
    </main>
  );
}

export default HomePage;
