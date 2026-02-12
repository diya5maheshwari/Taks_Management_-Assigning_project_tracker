import React from "react";
import "../css/Home.css";

// import createImg from "../assets/create.png";
// import assignImg from "../assets/assign.png";
// import trackImg from "../assets/track.png";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Manage Your Tasks Easily</h1>
        <p>
          A simple task manager to organize work, assign tasks,
          and track progress — all in one place.
        </p>
        <button className="primary-btn">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">

        <div className="feature">
          <img src="https://cdn.dribbble.com/userupload/44825958/file/3c649fc6861e0b97bff4dc40a661b30a.png?resize=400x0" alt="Create Task" />
          {/* <img src={createImg} alt="Create Task" /> */}
          <h3>Create Tasks</h3>
          <p>Create and manage your tasks after login.</p>
        </div>

        <div className="feature">
          <img src="https://cdn.dribbble.com/userupload/44825958/file/3c649fc6861e0b97bff4dc40a661b30a.png?resize=400x0" alt="Assign Task" />
          {/* <img src={assignImg} alt="Assign Task" /> */}
          <h3>Assign Tasks</h3>
          <p>Assign tasks to your team members easily.</p>
        </div>

        <div className="feature">
          {/* <img src={trackImg} alt="Track Progress" /> */}
          <img src="https://cdn.dribbble.com/userupload/44825958/file/3c649fc6861e0b97bff4dc40a661b30a.png?resize=400x0" alt="Track Progress" />
          <h3>Track Progress</h3>
          <p>Monitor task status and progress in real time.</p>
        </div>

      </section>

    </div>
  );
};

export default Home;
