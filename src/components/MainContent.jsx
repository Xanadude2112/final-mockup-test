import "../styles/MainContent.scss";
import CreateNewPost from "./CreateNewPost";
import PostItem from "./PostItem";

function MainContent({
  postItem,
  groupMemberModalToggler,
  handleCreateProjectButton,
  showNewProject,
  handleAddNewPostItem,
  setShowNewProject
}) {
  return (
    <div className="main-master">
      {!showNewProject && (
        <div className="add-post" onClick={handleCreateProjectButton}>
          Create a project <i className="fa-solid fa-plus add-post-icon"></i>
        </div>
      )}
      <div className="post-container">
        {showNewProject && (
          <CreateNewPost
            handleCreateProjectButton={handleCreateProjectButton}
            handleAddNewPostItem={handleAddNewPostItem}
            setShowNewProject={setShowNewProject}
          />
        )}
        {postItem.map((invdProj) => (
          <PostItem
            key={invdProj.id}
            id={invdProj.id}
            title={invdProj.title}
            tech={invdProj.tech}
            people={invdProj.people}
            groupMemberModalToggler={groupMemberModalToggler}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
