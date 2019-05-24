import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {

  render() {
    const { formMetadata: { columns, reading, updating, deleting }, entity } = this.props;

    return (
      <div className="mb-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              {
                columns.map((col, index) => (
                  <th key={ index }>{ col }</th>
                ))
              }
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              entity.map((row, key) => (
                <tr key={ key }>
                  {
                    columns.map((col, index) => (
                      <td key={ index } className="align-middle">
                        <div className="d-flex align-items-center">
                          { row[col] }
                        </div>
                      </td>
                    ))
                  }
                  <td>
                    <div className="d-flex">
                      {
                        reading ? <button className="btn btn-light mr-2" onClick={ () => this.props.onReading(row.id) }><i className="far fa-eye" /></button> : ''
                      }
                      {
                        updating ? <button className="btn btn-light mr-2" onClick={ () => this.props.onUpdating(row.id) }><i className="far fa-edit" /></button> : ''
                      }
                      {
                        deleting ? <button className="btn btn-light" onClick={ () => this.props.onDeleting(row.id) }><i className="fas fa-trash" /></button> : ''
                      }
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  formMetadata: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    reading: PropTypes.bool,
    updating: PropTypes.bool,
    deleting: PropTypes.bool,
  }).isRequired,
  entity: PropTypes.array.isRequired,
  onReading: PropTypes.func,
  onUpdating: PropTypes.func,
  onDeleting: PropTypes.func,
};

export default Table;
