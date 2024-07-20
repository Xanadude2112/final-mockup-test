import "../styles/SideNavbar.scss";

function SideNavbar() {
  return (
    <div className="sidebar-master">
      <h2 className="dashboard">Dashboard</h2>
      <div className="sidebar-contents">
        <p className="sidebar-links">
          <i class="fa-regular fa-message"> </i>Direct Messaging
        </p>
        <p className="sidebar-links">
          <i class="fa-regular fa-envelope"></i>Requests
        </p>
        <p className="sidebar-links">
          <i class="fa-solid fa-hammer"></i>Projects
        </p>
        <p className="sidebar-links">
          <i class="fa-regular fa-address-book"></i>Contacts
        </p>
      </div>
      <h2 className="resources">Resources</h2>
      <div className="sidebar-extras">
        <p className="sidebar-links">
          <i class="fa-regular fa-circle-question"></i>FAQ
        </p>
        <p className="sidebar-links">
          <i class="fa-solid fa-landmark"></i>Community (Guidelines)
        </p>
        <p className="sidebar-links">
          <i class="fa-solid fa-list-ul"></i>About
        </p>
      </div>
    </div>
  );
}

export default SideNavbar;
