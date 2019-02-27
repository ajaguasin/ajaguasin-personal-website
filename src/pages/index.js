import React from "react";
import Layout from "../components/Layout/layout";
import { Grow } from "@material-ui/core";
import SEO from "../components/seo";

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
      <Grow in={true} timeout={1000}>
        <div style={{ display: "inline-block", textAlign: "left", width: 450 }}>
          <span style={{ fontSize: "2rem" }}>Hello, I'm A.J.</span>
          <p style={{ fontSize: "4rem", lineHeight: "4rem" }}>
            I write web and mobile applications.
          </p>
          <div>
            <span>
              I'm a full stack developer who delivers dynamic user interfaces
              and robust backend services
            </span>
          </div>
        </div>
      </Grow>
    </div>
  </Layout>
);

export default IndexPage;
