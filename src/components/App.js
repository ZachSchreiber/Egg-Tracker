import React from 'react';
import data from '../data';
import Tablerow from './tableRow';

class App extends React.Component {
  constructor() {
     super();
     this.items = data;

   }

  render() {
    return (
      <div>
    <table className="table">
      <tbody>
      <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Home</th>
      </tr>
      {
      Object
          .keys(this.items)
          .map(key => <Tablerow key={key} index={key} details={this.items[key]}/> )
        }
  </tbody>
    </table>
  </div>
    )
  }

}

export default App;
