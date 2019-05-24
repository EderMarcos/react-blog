import React, { Component } from 'react';
import Table from '../../Table/Table';
import PropTypes from 'prop-types';
import axios from 'axios/index';
import { withRouter } from 'react-router-dom';
import config from '../../../config';
import * as Swal from 'sweetalert2';

class PostsIndex extends Component {

  endpoint = 'posts';

  state = {
    formMetadata: {
      columns: [
        'id',
        'title'
      ],
      reading: true,
      updating: true,
      deleting: true,
    },
    posts: []
  };

  componentDidMount() {
    axios.get(`${ config.url }${ this.endpoint }`)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }

  onView = async id => await this.props.history.push(`/${ this.endpoint }/${ id }/details`);

  onEdit = async id => await this.props.history.push(`/${ this.endpoint }/${ id }/edit`);

  onDelete = id => {
    const { posts } = this.state;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        axios.delete(`${ config.url }${ this.endpoint }/${ id }`)
          .then(res => {
            if (res.status === 200) {
              this.setState({ posts: posts.filter(p => p.id !== id) })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          .catch(err => console.log(err))
      }
    });
  };

  render() {
    return (
      <div className="container">
        <Table formMetadata={ this.state.formMetadata }
               entity={ this.state.posts }
               onDeleting={ this.onDelete }
               onReading={ this.onView }
               onUpdating={ this.onEdit } />
      </div>
    );
  }
}

PostsIndex.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(PostsIndex);
