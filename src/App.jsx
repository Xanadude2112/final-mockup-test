import { useState } from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import TodoList from "./components/TodoList";
import SideNavbar from "./components/SideNavbar";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";

function App() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const [todoListItem, setTodoListItem] = useState([
    {
      id: 1,
      text: "Stop having no friends",
    },
    {
      id: 2,
      text: "Join together with newly aquired friends",
    },
    {
      id: 3,
      text: "Come up with a kickass project idea",
    },
    {
      id: 4,
      text: "Hash out the details for the project",
    },
    {
      id: 5,
      text: "Work on my part for Monday",
    },
    {
      id: 6,
      text: "Present my super cool mockup",
    },
  ]);

  const signupModalToggler = () => {
    setSignupModalOpen((prevModal) => !prevModal);
  };

  const loginModalToggler = () => {
    setLoginModalOpen((prevModal) => !prevModal);
  };

  return (
    <div className="master">
      {loginModalOpen && <LoginModal loginModalToggler={loginModalToggler} />}
      {signupModalOpen && <SignUpModal signupModalToggler={signupModalToggler} />}
      <Navbar loginModalToggler={loginModalToggler} signupModalToggler={signupModalToggler} />
      <div className="content-container">
        <SideNavbar />
        <MainContent />
        <TodoList todoListItem={todoListItem} />
      </div>
    </div>
  );
}

export default App;
