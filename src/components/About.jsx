import React from "react";
import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us Page...</h1>
        <Profile name={"Vijendra"} />
      </div>
    );
  }
}

export default About;
