import React from "react";
import avatar from "../assets/images/avatar.png";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Phitharawat Ketmanee </span>
        </div>

        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>

        <div className="featured-text-info"></div>
        <p>
          เขียนประวัติเรา ทำงานเรื่องไหน ไบโอของเรา เขียนเรื่องอะไรเขียนไปลุย
        </p>

        <div className="featured-text-btn">
          <button className="btn">
            Dowload CV <i className="uil uil-import"></i>
          </button>
        </div>
      </div>
      <div className="social_icons">
        <div className="icon">
          <a href="http://www.instagram.com/se_npru">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
      </div>

      <div className="social_icons">
        <div className="icon">
          <a href="http://www.instagram.com/se_npru">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
      </div>

      <div className="social_icons">
        <div className="icon">
          <a href="http://www.instagram.com/se_npru">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
      </div>

      <div className="social_icons">
        <div className="icon">
          <a href="http://www.instagram.com/se_npru">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p Scroll Down></p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
