import React from 'react';
import Nav from './Nav';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {

	state = {
		submited: false
	}

	switchCase = cases => defaultCase => key => cases.hasOwnProperty(key)
		? cases[key]
		: defaultCase;

	hens = {
		'Barred Rock': 'black-and-white-hen',
		'Osterlorpe': 'brown-hen',
		'Rhode Island Red': 'light-brown-hen',
		'Leghorn': 'white-hen',
		'Barnevelder': 'leopard-hen'
	}

	createHen = (event) => {
		event.preventDefault();
		event.persist();
		const newHen = {
			first_name: event.target[0].value,
			last_name: event.target[1].value,
			breed: event.target[2].value,
			exp: event.target[3].value,
			eggs: 0,
			img: this.switchCase(this.hens)('barred')(event.target[2].value)
		}
		this.setState({submited: true});
    this.props.addNewHen(newHen);
    setTimeout(() => {
      this.props.history.push('/');
    }, 2000);
	}

	render() {
		return (<div className="home-container">
			<Nav weeklyCount={this.state.weeklyCount}/>
			<div className='home-flex-container'>
				<div className='main-title-container'>
					<div className={`big-egg ${this.state.submited === true
							? 'active'
							: null}`}></div>
					<div className='title-container'>
						<span>NEW</span>
						<span>HEN</span>
					</div>
				</div>
				<form onSubmit={this.createHen}>
          <p>Details on Your New Arrival</p>
					<input type='text' placeholder='First Name' required/>
					<input type='text' placeholder='Last Name'/>
					<select required>
						<option value="Barred Rock">Barred Rock</option>
						<option value="Osterlorpe">Osterlorpe</option>
						<option value="Rhode Island Red">Rhode Island Red</option>
						<option value="Leghorn">Leghorn</option>
						<option value="Barnevelder">Barnevelder</option>
					</select>
					<input type="number" placeholder="Weekly Egg Prodiction" name="Weekly Egg Prodiction" min="1" max="7" required/>
					<button type="submit">+ Add Hen</button>
				</form>
			</div>
		</div>)
	}
}

export default withRouter(Home);
