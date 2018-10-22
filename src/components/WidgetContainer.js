import React from 'react';
import Widget from './Widget';
import Nav from './Nav'


class WidgetContainer extends React.Component {


  render() {
    return (
      <div className="table">
        <Nav {...this.props}/>
        <div className='widget-container'>
      {
      Object
          .keys(this.props.hens)
          .map(key => <Widget key={key} index={key} deleteBird={this.props.deleteBird} updateCount={this.props.updateCount} details={this.props.hens[key]}/> )
        }
      </div>
  </div>
    )
  }

}

export default WidgetContainer;
