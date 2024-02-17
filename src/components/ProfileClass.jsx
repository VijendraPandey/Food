import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    //API Calls here cause it renders after the initial render
  }

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name : {this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default Profile;
