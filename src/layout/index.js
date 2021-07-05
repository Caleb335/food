import React from "react";
import propTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header title="Foodies" />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

// making use of the react prop-type module
// to validate the tyoe of data that gets into the layout component
propTypes.Layout = {
  children: propTypes.node.isRequired,
};
