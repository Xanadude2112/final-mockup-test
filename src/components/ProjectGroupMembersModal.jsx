import "../styles/ProjectGroupMembersModal.scss";

function ProjectGroupMembersModal({ title, people, groupMemberModalToggler }) {
  return (
    <div className="group-modal">
      <div className="group-overlay">
        <div className="group-members-master">
          <h1 className="close-modal" onClick={groupMemberModalToggler}>
            <i className="fa-solid fa-xmark"></i>
          </h1>
          <h1>{title} Group Members</h1>
          <div className="group-members-div">
            {people.map((groupMember, index) => (
              <div className="group-members-content" key={index}>
                <div className="group-member-image"></div>
                <p>{groupMember}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGroupMembersModal;
