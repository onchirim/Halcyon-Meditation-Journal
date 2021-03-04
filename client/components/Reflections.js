import React, { Component } from 'react';

class Reflections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(this.props.journalUrl)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  render() {
    return <div>My Journal</div>;
  }
}

export default Reflections;
