import React from "react";
import { Link } from "gatsby";
import { MenuList, MenuItem } from "@material-ui/core";

import menuStyles from "./menu.module.css";
const Menu = () => (
  <div style={{}}>
    <MenuList
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        textAlign: "right"
      }}
    >
      <MenuItem className={menuStyles.menuItem}>
        <Link to="/about" className={menuStyles.link}>
          Me
        </Link>
      </MenuItem>
      <MenuItem className={menuStyles.menuItem}>
        <Link to="/portfolio" className={menuStyles.link}>
          Portfolio
        </Link>
      </MenuItem>
      {/* <MenuItem className={menuStyles.menuItem}>
        <Link to="/blog" className={menuStyles.link}>
          Blog
        </Link>
      </MenuItem> */}
    </MenuList>
  </div>
);

export default Menu;
