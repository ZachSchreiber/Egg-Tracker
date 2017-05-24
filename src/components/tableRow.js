import React from 'react';


class TableRow extends React.Component {


  render() {
    return (
    <tr>
      <td>{this.props.details.first_name}</td>
      <td>{this.props.details.last_name}</td>
      <td>{this.props.details.home}</td>
    </tr>
    )
  }
}

export default TableRow;
