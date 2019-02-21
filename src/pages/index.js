import React from "react";
import Layout from "../components/Layout/layout";
import containerStyles from "../styles/container.module.css";
import { Paper, Grid, Avatar, Grow } from "@material-ui/core";
import SEO from "../components/seo";
import picture from "../images/photo.jpg";
import Menu from "../components/Menu/menu";

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" keywords={[`home`, `me`, `a.j. aguasin`]} />
    <div
      style={{
        flex: "1 0 auto",
        marginTop: "auto",
        marginBottom: "auto"
      }}
    >
      <Grow in={true} timeout={1500}>
        <div style={{ display: "inline-block", textAlign: "left", width: 400 }}>
          <span>Hello, I'm A.J.</span>
          <p style={{ fontSize: "1.6rem" }}>
            I write web and mobile applications.
          </p>
          <span>
            I'm a full stack developer who delivers dynamic user interfaces and
            robust backend services
          </span>
        </div>
      </Grow>
    </div>
  </Layout>
);

export default IndexPage;
