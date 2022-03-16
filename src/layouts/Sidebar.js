import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Welcome",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "View Stories",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Create Stories",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  // {
  //   title: "Alert",
  //   href: "/alerts",
  //   icon: "bi bi-bell",
  // },
  // {
  //   title: "Badges",
  //   href: "/badges",
  //   icon: "bi bi-patch-check",
  // },
  // {
  //   title: "Buttons",
  //   href: "/buttons",
  //   icon: "bi bi-hdd-stack",
  // },
  // {
  //   title: "Grid",
  //   href: "/grid",
  //   icon: "bi bi-columns",
  // },
  // {
  //   title: "Table",
  //   href: "/table",
  //   icon: "bi bi-layout-split",
  // },
  // {
  //   title: "Breadcrumbs",
  //   href: "/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        {/* <Logo /> */}
        <h3 style={{marginLeft:"30px"}}>
          <span style={{color:"white"}}>TellUs</span>
          <span style={{fontWeight:"bolder"}}>Story</span>
          </h3>
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon} style={{color:"white"}}></i>
                <span className="ms-3 d-inline-block" style={{color:"white"}}>{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="primary"
            tag="a"
            target="_blank"
            className="mt-3"
            // href="https://www.wrappixel.com/templates/ample-react-dashboard/?ref=33"
          >
            Logout
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
