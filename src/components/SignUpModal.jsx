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
          </div>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
