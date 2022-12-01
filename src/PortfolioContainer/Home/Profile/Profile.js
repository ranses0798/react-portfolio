import React from "react";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
            <a href="https://github.com/ranses0798">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.instagram.com/ramsesr07/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com/ARanses07">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Ramses</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                Software Development Student 👨🏻‍🎓
              </h1>
              <span>Student from Panama Technological University.</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href='resume.pdf' download='Ramses-Ramos-Resume.pdf'>
             <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
