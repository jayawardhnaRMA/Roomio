import React from "react";
import "../styles/Hero.css";

import heroImage from "../assets/hero-image.png";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

function Hero() {
return ( <section className="hero"> <div className="hero-container">


    {/* LEFT SIDE */}
    <div className="hero-left">

      <div className="hero-badge">
        <span className="badge-dot"></span>
        V2.0 NOW LIVE
      </div>

      <h1 className="hero-title">
        Visualize Your <br />
        <span>Dream Room</span> in <br />
        Stunning 3D
      </h1>

      <p className="hero-text">
        Design, arrange, and render your living space with professional-grade
        tools right in your browser. Photorealistic results in minutes, no
        technical skills required.
      </p>

      <button className="hero-btn">
        Start Designing Free
      </button>

      <div className="hero-users">
        <div className="avatars">
          <img src={avatar1} alt="user1" />
          <img src={avatar2} alt="user2" />
          <img src={avatar3} alt="user3" />
        </div>

        <p>Joined by 50,000+ designers</p>
      </div>

    </div>


    {/* RIGHT SIDE */}
    <div className="hero-right">

      {/* Decorative Blur Circles */}
      <div className="hero-bg-circle hero-bg-1"></div>
      <div className="hero-bg-circle hero-bg-2"></div>

      {/* Image Card */}
      <div className="hero-image-card">

        <img src={heroImage} alt="room preview" />

        <div className="render-badge">
          <div className="badge-icon">🎨</div>

          <div className="render-text">
            <span>LIVE RENDER</span>
            <p>Modern Scandinavian</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>


);
}

export default Hero;
