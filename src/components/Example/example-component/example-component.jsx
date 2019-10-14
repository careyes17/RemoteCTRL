import React, { Component } from "react";

class ExampleComponent extends Component {
  state = {
    numOfUsers: 5
  };
  render() {
    return (
      <div className="member-counter">
        <button type="button" className="btn btn-info btn-text btn-square">
          <i className="fa fa-user" />
          <span className="member-counter-font-weight">
            &emsp;&ensp;{this.state.numOfUsers}
          </span>
        </button>
      </div>
    );
  }
}

export default ExampleComponent;
