import "../styles/MainContent.scss";
import PostItem from "./PostItem";

function MainContent({ postItem, groupMemberModalToggler }) {
  return (
    <div className="main-master">
      <div className="add-post">
        Create a project <i className="fa-solid fa-plus add-post-icon"></i>
      </div>
      <div className="post-container">
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
