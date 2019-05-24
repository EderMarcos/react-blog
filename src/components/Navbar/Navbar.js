import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {

    const { btnLeft, linkToLeft, btnRight, linkToRight } = this.props;

    return (
      <div className="d-flex justify-content-between align-items-center">
        {
          btnLeft ? <Link className="btn btn-secondary" to={ linkToLeft }>{ btnLeft }</Link> : ''
        }
        {
          btnRight ? <Link className="btn btn-secondary" to={ linkToRight }>{ btnRight }</Link> : ''
        }
      </div>
    );
  }
}

Navbar.propTypes = {
  btnLeft: PropTypes.string,
  linkToLeft: PropTypes.string,
  btnRight: PropTypes.string,
  linkToRight: PropTypes.string,
};

export default Navbar;
