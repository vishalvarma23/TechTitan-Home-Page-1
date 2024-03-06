const HeroSection = () => {
  return (
    <main className="hero container">
      {/* <div className="main_Div"> */}
        <div className="hero-content">
          <h1 className="title_Main">CareerConnect</h1>
          <p>
          Elevate Your Placement Journey
          </p>

          <div className="hero-btn">
            <button className="hero-real">Start</button>
            {/* <button className="secondary-btn">Category</button> */}
          </div>
        </div>
        <div className="hero-image">
          <img src="./src\assets\careerimage.png" alt="hero-image" />
        </div>
      {/* </div> */}

    </main>
  );
};

export default HeroSection;
