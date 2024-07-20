import { useState } from "react";
import "../styles/LoginModal.scss";

function LoginModal({ loginModalToggler }) {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="log-in-interact">
          <h1 className="close-modal" onClick={() => loginModalToggler()}>
            <i className="fa-solid fa-xmark"></i>
          </h1>
          <h2 className="log-in">Login</h2>
          <div className="inputs-div">
            <input type="text" className="" placeholder="Email" />
            <input type="text" className="" placeholder="Password" />
          </div>
          <button className="log-in-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;