import React from 'react';


class Eggs extends React.Component {

  handleClick = (event) => {
    let eggCount = event.target.attributes.getNamedItem('eggcount').value;
    this.props.updateCount(this.props.index, eggCount)
  }


  render() {
    const eggs = this.props.details.eggs;
    return (
    <div className='egg-container'>
      <div onClick={this.handleClick} eggcount='1' className={`egg ${eggs >= 1 ? 'active' : null}`}> </div>
      <div onClick={this.handleClick} eggcount='2' className={`egg ${eggs >= 2 ? 'active' : null}`}> </div>
      <div onClick={this.handleClick} eggcount='3' className={`egg ${eggs >= 3 ? 'active' : null}`}> </div>
      <div onClick={this.handleClick} eggcount='4' className={`egg ${eggs >= 4 ? 'active' : null}`}> </div>
      <div onClick={this.handleClick} eggcount='5' className={`egg ${eggs >= 5 ? 'active' : null}`}> </div>
      <div onClick={this.handleClick} eggcount='6' className={`egg ${eggs >= 6 ? 'active' : null}`}> </div>
      <div onClick={this.handleClick} eggcount='7' className={`egg ${eggs >= 7 ? 'active' : null}`}> </div>
    </div>
    )
  }
}

export default Eggs;
