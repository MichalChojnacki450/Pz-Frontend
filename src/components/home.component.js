import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="title">
        <div className="home">
          <h1 className="title2">Lody Wrocław</h1>
        </div>
        <img className="picture" src="https://ocdn.eu/pulscms-transforms/1/GpZk9kpTURBXy9kY2ZmY2ZjMmUxNTNkMTdhYjc2MjY4ZGU2NzZjNDczMC5qcGeTlQMAzLTNFoDNDKiTBc0DFM0BvJMJpjM0NDY4YgaBoTAF/lody-jak-z-lodziarni-w-twoim-domu.webp"></img>
        
        <div className="footer">
          <header className="jumbotron">
            <h3>{this.state.content}</h3>
          </header>
        </div>
      </div>
    );
  }
}
