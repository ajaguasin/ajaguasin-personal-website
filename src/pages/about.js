import React, { Component } from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import {
  Grid,
  Paper,
  Grow,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Card,
  CardMedia,
  CardContent,
  Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import myPhoto from "../images/tokyo.jpg";
class AboutPage extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { expanded } = this.state;

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
          <Grow in={true} timeout={1500}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                width: 500
              }}
            >
              <Card style={{ width: "50%" }}>
                <CardMedia style={{ padding: "56.25%" }} image={myPhoto} />
                <CardContent>About me!</CardContent>
              </Card>

              <div style={{ marginTop: "1rem" }}>
                <ExpansionPanel
                  expanded={expanded === "panel1"}
                  onChange={this.handleChange("panel1")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    I'm a Trainer
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Card>
                      <CardContent>
                        I'm a certified personal trainer. There's no other
                        feeling like helping people improve their self image
                        through exercise.
                      </CardContent>
                    </Card>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel2"}
                  onChange={this.handleChange("panel2")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    I'm a Traveller
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Card>
                      <CardContent>
                        I also enjoy travelling. I've been to Japan (Tokyo,
                        Yamaguchi, Hiroshima), Thailand (Bangkok, Krabi, Koh
                        Lanta), Hong Kong, China (Guizhou), and the Philippines.
                      </CardContent>
                    </Card>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={expanded === "panel3"}
                  onChange={this.handleChange("panel3")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    I'm a Gamer
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Card>
                      <CardContent>
                        If I'm not coding, exercising, or eating (lol), I'm
                        definitely gaming. Find me on Overwatch or Apex Legends!
                      </CardContent>
                    </Card>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
          </Grow>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
