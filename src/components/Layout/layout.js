import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../header";
import "./layout.css";
import Menu from "../Menu/menu";
import { Paper, Divider } from "@material-ui/core";

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
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "0 1 auto",
            height: "100vh",
            width: 150
          }}
        >
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Divider variant="middle" />
          </div>
          <Menu />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "auto"
            }}
          >
            <Divider variant="middle" />
            <a href="https://www.linkedin.com/in/ajaguasin/">LinkedIn</a>
            <a href="https://github.com/ajaguasin">GitHub</a>
            <a href="https://www.youtube.com/channel/UC3zcETy3bUKKA0TnjzNfFww/">
              YouTube
            </a>
            <a href="https://www.instagram.com/aaguasin/">Instagram</a>
          </div>
        </Paper>
        {children}
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
