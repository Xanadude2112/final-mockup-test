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
  const [todoListItem, setTodoListItem] = useState([]);

  const addTodoListItem = (text) => {
    // determine the next id value
    const nextId = todoListItem.length > 0 
      ? Math.max(...todoListItem.map(item => item.id)) + 1 
      : 1;

    // create the new todo item
    const addedTodoItem = {
      id: nextId,
      text
    };

    // update the state with the new todo item
    const allTodosArr = [...todoListItem, addedTodoItem];
    setTodoListItem(allTodosArr);
  };

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
        <TodoList todoListItem={todoListItem} addTodoListItem={addTodoListItem} />
      </div>
    </div>
  );
}

export default App;
