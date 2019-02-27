import React, { Component } from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import { Grow, Grid } from "@material-ui/core";
import {
  FitnessCenter,
  AirplanemodeActive,
  Code,
  Gamepad
} from "@material-ui/icons";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About" keywords={[`about`, `me`, `summary`]} />
        <div
          style={{
            flex: "1 0",
            marginTop: "auto",
            marginBottom: "auto"
          }}
        >
          <Grow in={true} timeout={1000}>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                textAlign: "justify",
                padding: "2rem"
              }}
            >
              <Grid item xs={6} style={{ margin: "1rem" }}>
                <FitnessCenter />
                <div>Fitness</div>
                <p>
                  I'm a certified personal trainer who enjoys helping others
                  accomplish their fitness goals. The techniques I use on my
                  clients is what I apply to myself and other aspects of my
                  life. Stay consistent, challenge yourself, and have fun .
                  {<br />} In 2015 and 2016 I participated in Tough Mudder, an
                  epic 16km obstacle race course that challenged endurance,
                  mental toughness, and teamwork.
                </p>
              </Grid>
              <Grid item xs={4}>
                <AirplanemodeActive />
                <div>Travel</div>
                <p>
                  I've been to Japan (Tokyo, Yamaguchi, Hiroshima), Thailand
                  (Bangkok, Krabi, Koh Lanta), Hong Kong, China (Guizhou), and
                  the Philippines (Manila, Laguna). I'm fortunate to have
                  experienced different customs and cultures. I can't wait for
                  my next adventure.
                </p>
              </Grid>
              <Grid item xs={4}>
                <Code />
                <div>Programming</div>
                <p>
                  Before I knew how to code, I always thought programming was a
                  mystery. My first introduction to writing code was when I
                  taught myself how to make a website with HTML, CSS, and
                  JavaScript. I realized that I enjoy programming and wanted to
                  shape my future career around it.
                </p>
              </Grid>

              <Grid item xs={6} style={{ margin: "1rem" }}>
                <Gamepad />
                <div>Gamer</div>
                <p>
                  If I'm not programming, exercising, and eating(lol), you can
                  find me on Battlenet, Origin, or Steam. 8)
                </p>
              </Grid>
            </Grid>
          </Grow>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
