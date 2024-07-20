import { useEffect, useState } from "react";
import "../styles/Navbar.scss";

function Navbar({ modalToggler }) {
  return (
    <div className="nav">
      <h1 className="logo">ILLUMIN💫TE PROJECT</h1>
      <div className="buttons">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
