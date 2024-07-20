import { useState } from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import TodoList from "./components/TodoList";
import SideNavbar from "./components/SideNavbar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [todoListItem, setTodoListItem] = useState([
    {
      id: 1,
      text: "Stop having no friends"
    },
    {
      id: 2,
      text: "Join together with newly aquired friends"
    },
    {
      id: 3,
      text: "Come up with a kickass project idea"
    },
    {
      id: 4,
      text: "Hash out the details for the project"
    },
    {
      id: 5,
      text: "Work on my part for Monday"
    },
    {
      id: 6,
      text: "Present my super cool mockup"
    },

  ])

  const modalToggler = () => {
    setModalOpen(prevModal => !prevModal);
  }

  return (
    <div className="master">
      <Navbar modalToggler={modalToggler}/>
      <div className="content-container">
        <SideNavbar modalToggler={modalToggler}/>
        <MainContent />
        <TodoList todoListItem={todoListItem}/>
      </div>
    </div>
  );
}

export default App;
