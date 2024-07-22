import { useState } from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import TodoList from "./components/TodoList";
import SideNavbar from "./components/SideNavbar";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";
import ProjectGroupMembersModal from "./components/ProjectGroupMembersModal"; 

function App() {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [groupMemberModalOpen, setGroupMemberModalOpen] = useState(false);
  const [selectedGroupMembers, setSelectedGroupMembers] = useState([]);
  const [todoListItem, setTodoListItem] = useState([]);
  const [postItem, setPostItem] = useState([
    {
      id: 1,
      title: "THE BOMB.COM",
      tech: ["Ruby", "React", "SCSS", "Postgresql"],
      people: ["Mary (Creator)", "Jane", "Hugh", "Janus"],
    },
    {
      id: 2,
      title: "PROVIDERS.NET",
      tech: ["Express JS", "React", "TailwindCSS", "MySQL"],
      people: ["Joe (Creator)", "Mama", "Jenna", "Tull"],
    },
    {
      id: 3,
      title: "MeSphere",
      tech: ["Express JS", "EJS", "Javascript", "CSS", "SQLite"],
      people: ["Jose (Creator)", "Rebecca", "Tommy"],
    },
    {
      id: 4,
      title: "THE HIVE",
      tech: ["MongoDB", "Express JS", "React", "Node JS"],
      people: ["Barry Bee (Creator)", "Queen Latifa", "Drone Beigh", "Paul Ehn"],
    },
  ]);

  const [showNewProject, setShowNewProject] = useState(false);

  const handleAddNewPostItem = (newPost) => {
    const nextId =
      postItem.length > 0
        ? Math.max(...postItem.map((item) => item.id)) + 1
        : 1;

    const addPostItem = {
      id: nextId,
      title: newPost.newProjectName,
      tech: newPost.newProjectStack.split(","),
      people: newPost.newProjectMembers.split(","),
    };

    const allPostArr = [addPostItem, ...postItem];
    setPostItem(allPostArr);
  };

  const handleCreateProjectButton = () => {
    setShowNewProject((prev) => !prev);
  };

  const addTodoListItem = (text) => {
    const nextId =
      todoListItem.length > 0
        ? Math.max(...todoListItem.map((item) => item.id)) + 1
        : 1;

    const addedTodoItem = {
      id: nextId,
      text,
    };

    const allTodosArr = [...todoListItem, addedTodoItem];
    setTodoListItem(allTodosArr);
  };

  const signupModalToggler = () => {
    setSignupModalOpen((prevModal) => !prevModal);
  };

  const loginModalToggler = () => {
    setLoginModalOpen((prevModal) => !prevModal);
  };

  const groupMemberModalToggler = (members = []) => {
    setSelectedGroupMembers(members); 
    setGroupMemberModalOpen((prev) => !prev);
  };

  return (
    <div className="master">
      {loginModalOpen && <LoginModal loginModalToggler={loginModalToggler} />}
      {signupModalOpen && (
        <SignUpModal signupModalToggler={signupModalToggler} />
      )}
      {groupMemberModalOpen && (
        <ProjectGroupMembersModal
          key={postItem.id}
          title={postItem.title}
          people={selectedGroupMembers}
          groupMemberModalToggler={groupMemberModalToggler}
        />
      )}
      <Navbar
        loginModalToggler={loginModalToggler}
        signupModalToggler={signupModalToggler}
      />
      <div className="content-container">
        <SideNavbar />
        <MainContent
          postItem={postItem}
          groupMemberModalToggler={groupMemberModalToggler}
          handleCreateProjectButton={handleCreateProjectButton}
          showNewProject={showNewProject}
          handleAddNewPostItem={handleAddNewPostItem}
          setShowNewProject={setShowNewProject}
        />
        <TodoList
          todoListItem={todoListItem}
          addTodoListItem={addTodoListItem}
        />
      </div>
    </div>
  );
}

export default App;
