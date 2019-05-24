import React, { Component } from 'react';
import Table from '../Table/Table';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class PostIndex extends Component {

  state = {
    posts: this.props.posts
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: {
            ...this.state.posts,
            data: res.data
          }
        })
      })
      .catch(err => console.log(err))
  }

  onView = async id => await this.props.history.push(`/posts/${ id }/details`);

  onEdit = async id => await this.props.history.push(`/posts/${ id }/edit`);

  onDelete = () => {
    console.log('onDelete');
  };

  render() {
    return (
      <div className="container">
        <Table entity={ this.state.posts }
               onDeleting={ this.onDelete }
               onReading={ this.onView }
               onUpdating={ this.onEdit } />
      </div>
    );
  }
}

PostIndex.propTypes = {
  posts: PropTypes.any.isRequired,
  history: PropTypes.object
};

export default withRouter(PostIndex);
