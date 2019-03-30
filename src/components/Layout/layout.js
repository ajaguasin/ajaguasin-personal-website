import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header/header";
import layoutStyles from "./layout.module.css";
import Menu from "../Menu/menu";
import { Grow, Paper, Divider, MenuList, MenuItem } from "@material-ui/core";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center"
        }}
      >
        <Grow in={true} timeout={2000}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "0 1 auto",
              height: "100vh",
              width: 150,
              textAlign: "right"
            }}
          >
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Header siteTitle={data.site.siteMetadata.title} />
              {/* <Divider variant="middle" /> */}
            </div>
            <Menu />
            <MenuList
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "auto",
                minWidth: "100px",
                // paddingRight: 0,
                justifyContent: "center",
                alignItems: "flex-end",
                textAlign: "right"
              }}
            >
              {/* <Divider variant="middle" /> */}
              <MenuItem
                className={layoutStyles.menuItem}
                href="https://www.linkedin.com/in/ajaguasin/"
                target="_blank"
              >
                LinkedIn
              </MenuItem>
              <MenuItem
                className={layoutStyles.menuItem}
                href="https://github.com/ajaguasin"
                target="_blank"
              >
                GitHub
              </MenuItem>
              <MenuItem
                className={layoutStyles.menuItem}
                href="https://www.youtube.com/channel/UC3zcETy3bUKKA0TnjzNfFww/"
                target="_blank"
              >
                YouTube
              </MenuItem>
              <MenuItem
                className={layoutStyles.menuItem}
                href="https://www.instagram.com/aaguasin/"
                target="_blank"
              >
                Instagram
              </MenuItem>
            </MenuList>
          </div>
        </Grow>
        {children}
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
