import "../styles/SideNavbar.scss"

function SideNavbar(){
  return(
    <div className="sidebar-master">
      <h2 className="dashboard">Dashboard</h2>
      <div className="sidebar-contents">
        <p>Direct Messaging <i class="fa-regular fa-message"></i></p>
        <p>Requests <i class="fa-regular fa-envelope"></i></p>
        <p>Projects <i class="fa-light fa-screwdriver-wrench"></i></p>
        <p>Contacts <i class="fa-regular fa-address-book"></i></p>
      </div>
    </div>
  )
}

export default SideNavbar;