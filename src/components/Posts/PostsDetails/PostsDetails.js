import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class PostsDetails extends Component {

  state = {
    post: {}
  };

  componentDidMount() {
    const { id } = this.props;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${ id }`)
      .then(res => res.data)
      .then(post => this.setState({ post }))
      .catch(err => console.log(err))
  }

  render() {
    const { post } = this.state;

    return (
      <div className="container">
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{ post.title }</h5>
              <p className="card-text">{ post.body }</p>
            </div>
        </div>
      </div>
    );
  }
}

PostsDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PostsDetails;
