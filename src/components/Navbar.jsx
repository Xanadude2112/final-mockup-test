import { useEffect, useState } from "react";
import "../styles/Navbar.scss";

function Navbar({ loginModalToggler, signupModalToggler }) {
  return (
    <div className="nav">
      <h1 className="logo">ILLUMIN💫TE PROJECT</h1>
      <div className="buttons">
        <button className="login" onClick={loginModalToggler}>Login</button>
        <button className="signup" onClick={signupModalToggler}>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
