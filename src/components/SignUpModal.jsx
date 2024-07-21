import { useState } from "react";
import "../styles/SignUpModal.scss";

function SignUpModal({ signupModalToggler }) {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="signup-interact">
          <h1 className="close-modal" onClick={() => signupModalToggler()}>
            <i className="fa-solid fa-xmark"></i>
          </h1>
          <h2 className="sign-in">Sign Up</h2>
          <div className="inputs-div">
            <input type="text" className="" placeholder="Name" />
            <input type="text" className="" placeholder="Email" />
            <input type="text" className="" placeholder="Password" />
            <input type="text" className="" placeholder="Github" />
            <p>Preferred Tech Stack</p>
            <select className="selector" id="">
              <option value="">TECH STACK</option>
              <option value="">MERN</option>
              <option value="">MEAN</option>
              <option value="">LAMP</option>
              <option value="">DJANGO</option>
              <option value="">RUBY ON RAILS</option>
              <option value="">JAM</option>
              <option value="">SERVERLESS</option>
              <option value="">PERN</option>
              <option value="">SPRING BOOT ANGULAR</option>
              <option value="">FLUTTER FIREBASE</option>
            </select>
            <div></div>
          </div>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
