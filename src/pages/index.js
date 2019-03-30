import React from "react";
import Layout from "../components/Layout/layout";
import { Button, Divider } from "@material-ui/core";
import SEO from "../components/Seo/seo";
import containerStyles from "../styles/container.module.css";

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
      <div
        style={{
          display: "inline-block",
          textAlign: "left",
          width: 450
        }}
      >
        <div
          className={containerStyles.animationEffect}
          // style={{ display: "inline-block" }}
        >
          <p style={{ fontSize: "1rem" }}>Hello, I'm A.J.</p>
          <p style={{ fontSize: "1rem", lineHeight: "1rem" }}>
            I write web and mobile applications.
          </p>
          <p>
            I'm a full stack developer
            <br /> who delivers dynamic user interfaces
            <br />
            and robust backend services
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start"
          }}
        >
          <Button variant="outlined" style={{ marginBottom: "1rem" }}>
            Learn more
          </Button>
          <Button variant="outlined">See Works</Button>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
