import React, { Component } from 'react';
import Form from '../../Form/Form';
import axios from 'axios';
import config from '../../../config';
import { withRouter } from 'react-router-dom';
import * as Swal from 'sweetalert2';
// import PropTypes from 'prop-types';

class PostsCreate extends Component {

  onNewPost = data => {
    axios.post(`${ config.url }posts`, data)
      .then(async () => {
        Swal.fire(
          'Success',
          'Registro Creado Exitosamente',
          'success'
        ).then(() => this.props.history.push('/posts'));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={ this.onNewPost } />
      </div>
    );
  }
}

// PostsCreate.propTypes = {};

export default withRouter(PostsCreate);
