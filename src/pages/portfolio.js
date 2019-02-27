import React from "react";
import Layout from "../components/Layout/layout";
import { Grow, Grid, Card, CardHeader, CardMedia } from "@material-ui/core";
import SEO from "../components/seo";

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`work`, `portfolio`, `experience`]} />

    <div
      style={{
        flex: "1 0 auto",
        marginTop: "auto",
        marginBottom: "auto"
      }}
    >
      <Grow in={true} timeout={1000}>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "justify",
            padding: "2rem"
          }}
        >
          <Grid item xs={5} style={{ margin: "1rem" }}>
            <Card>
              <header>BlockFundr</header>
              <p>
                A Crowdfunding blockchain application for the Ethereum Network.
                Built with Solidity, React, Semantic UI React, JavaScript.
              </p>
            </Card>
          </Grid>
          <Grid item xs={5} style={{ margin: "1rem" }}>
            <Card>
              <header>JoinRide</header>
              <p>
                An application to promote carpooling. Built with Meteor.js,
                MongoDB, Material UI
              </p>
            </Card>
          </Grid>
          <Grid item xs={5} style={{ margin: "1rem" }}>
            <Card>
              <header>YourCity</header>
              <p>
                A solution to eliminate boredom in YourCity!. Built with React,
                Express.js, PostgreSQL, Semantic UI React
              </p>
            </Card>
          </Grid>
          <Grid item xs={5} style={{ margin: "1rem" }}>
            <Card>
              <header>Boomtown</header>
              <p>
                A social photo sharing application. Built with React, Redux,
                Express.js, PostgreSQL, GraphQL, Material UI
              </p>
            </Card>
          </Grid>
        </Grid>
      </Grow>
    </div>
  </Layout>
);

export default PortfolioPage;
