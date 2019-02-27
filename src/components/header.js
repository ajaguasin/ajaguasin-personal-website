import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import picture from "../images/photo.jpg";
const header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <Link
      to="/"
      style={{
        textDecoration: `none`
      }}
    >
      {siteTitle}
    </Link>
    <Link to="/">
      <img
        alt="AJ"
        src={picture}
        style={{ width: 100, height: 100, borderRadius: 50, margin: 0 }}
      />
    </Link>
  </div>
);

header.propTypes = {
  siteTitle: PropTypes.string
};

header.defaultProps = {
  siteTitle: ``
};

export default header;
