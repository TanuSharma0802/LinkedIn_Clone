import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Headeroption from "./Headeroption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase1";
import { logout, selectUser } from "./features/userSlice";
function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="Header">
      <div className="header_left">
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
          alt="Linkedin"
        />

        <div className="header_searchbar">
          <SearchIcon />
          {/*searchIcon*/}
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <Headeroption Icon={HomeIcon} title="Home" />
        <Headeroption Icon={SupervisorAccountIcon} title="My Network" />
        <Headeroption Icon={BusinessCenterIcon} title="Jobs" />
        <Headeroption Icon={ChatIcon} title="Messaging" />
        <Headeroption Icon={NotificationsIcon} title="Notifications" />
        <Headeroption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
