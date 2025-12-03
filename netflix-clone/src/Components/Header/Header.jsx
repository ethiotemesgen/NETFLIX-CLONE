import React from "react";
import "./Header.css";
import NetflixLogo from "../../asset/BrandAssets_Logos_01-Wordmark.jpg"; // Your logo file
import {
  Search as SearchIcon,
  NotificationsNone as NotificationsNoneIcon,
  AccountBox as AccountBoxIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material"; // Material UI icons

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left">
        <ul>
          <li>
            <img src={NetflixLogo} alt="" width="100%" />
          </li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

       <div className="header_right">
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header; 
