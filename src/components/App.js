import React from 'react';
import data from '../data';
import Tablerow from './tableRow';

class App extends React.Component {
  constructor() {
     super();
     this.items = data;

   }


//Used Object.keys() to create key values for each object. Then ran Object.map().
//Using a facy es6 arrow fuction, I use the key value as an argument to reference each object.
//I pass the data from each object to the Tablerow component with the details attribute.
//The data is passed using React 'props'.
//Also considered using the forEach() method, but this worked.


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
