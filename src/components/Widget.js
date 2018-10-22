import React from 'react';
import Eggs from './Eggs'

class Widget extends React.Component {

  handleClick = index => {
    this.props.deleteBird(this.props.index);
  }

	render() {
		const details = this.props.details;
		return (<div className='widget'>
			<div className='delete' onClick={this.handleClick}>
				<i className="fas fa-utensils tooltip">
					<span className="tooltiptext">Dinner</span>
				</i>
			</div>
			<div className='image-container'>
				<div className={`image ${details.img}`}></div>
				<div className='name-container'>
					<span>{details.first_name}</span>
					<span>{details.last_name}</span>
				</div>
			</div>
			<div className='breed-container'>
				<span>Breed:</span>
				<span>{details.breed}</span>
				<span className='expected'>Exp:
				</span>
				<span className='expected'>{details.exp}</span>
			</div>
			<Eggs {...this.props}/>
		</div>)
	}
}

export default Widget;
