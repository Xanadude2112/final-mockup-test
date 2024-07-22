import { useState } from "react";
import "../styles/CreateNewPost.scss";

function CreateNewPost({ handleCreateProjectButton, handleAddNewPostItem, setShowNewProject }) {
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDesc, setNewProjectDesc] = useState("");
  const [newProjectMembers, setNewProjectMembers] = useState("");
  const [newProjectStack, setNewProjectStack] = useState("");

  const handleChangeName = (event) => {
    setNewProjectName(event.target.value);
  };
  const handleChangeDesc = (event) => {
    setNewProjectDesc(event.target.value);
  };
  const handleChangeMembers = (event) => {
    setNewProjectMembers(event.target.value);
  };
  const handleChangeStack = (event) => {
    setNewProjectStack(event.target.value);
  };

  const handleNewPostSubmit = () => {
    if (
      newProjectName.trim().length <= 0 ||
      newProjectDesc.trim().length <= 0 ||
      newProjectMembers.trim().length <= 0 ||
      newProjectStack.trim().length <= 0
    ) {
      const button = document.getElementsByClassName("submit-new-project")[0];
      button.classList.remove("submit-new-project");
      button.classList.add("error");

      setTimeout(function () {
        button.classList.remove("error");
        button.classList.add("submit-new-project");
      }, 800);
    } else {
      handleAddNewPostItem({ newProjectName, newProjectDesc, newProjectMembers, newProjectStack });
      setShowNewProject(false);
    }
  };

  return (
    <div className="new-project-master">
      <h1
        className="close-new-post"
        onClick={handleCreateProjectButton}
      >
        <i className="fa-solid fa-xmark"></i>
      </h1>
      <div className="new-project-content-container">
        <div className="new-project-name">
          <p>PROJECT NAME</p>
          <input
            type="text"
            value={newProjectName}
            onChange={handleChangeName}
          />
        </div>
        <div className="new-project-description">
          <p>PROJECT DESCRIPTION</p>
          <input
            type="text"
            value={newProjectDesc}
            onChange={handleChangeDesc}
          />
        </div>
        <div className="new-project-members">
          <p>PROJECT MEMBERS</p>
          <input
            type="text"
            value={newProjectMembers}
            onChange={handleChangeMembers}
          />
        </div>
        <div className="new-project-stack">
          <p>TECH STACK</p>
          <input
            type="text"
            value={newProjectStack}
            onChange={handleChangeStack}
          />
        </div>
      </div>
      <button className="submit-new-project" onClick={handleNewPostSubmit}>Create Project</button>
    </div>
  );
}

export default CreateNewPost;
