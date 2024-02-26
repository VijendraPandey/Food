import React from "react";
import {Outlet} from "react-router-dom";
class About extends React.Component {
  

  render() {
    return (
      <div>
        <h1>About Us Page...</h1>
        <Outlet />
      </div>
    );
  }
}

export default About;
