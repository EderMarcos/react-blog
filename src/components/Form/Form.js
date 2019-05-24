import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

  title = React.createRef();
  body = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ title: this.title.current.value, body: this.body.current.value })
  };

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" ref={ this.title } />
        </div>
        <div className="form-group">
          <label htmlFor="body">Description</label>
          <input type="text" className="form-control" id="body" ref={ this.body } />
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary">{ this.props.btn }</button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  btn: PropTypes.string,
  onSubmit: PropTypes.func,
};

Form.defaultProps  = {
  btn: 'Crear'
};

export default Form;

