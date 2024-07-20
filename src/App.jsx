import { useState } from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import TodoList from "./components/TodoList";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <div className="master">
      <Navbar />
      <div className="content-container">
        <SideNavbar />
        <MainContent />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
