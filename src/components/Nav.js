import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
	render() {
		return (<div className='the-nav'>
			<div>
				<span>Weekly Egg Count:
				</span>
				<span>{this.props.weeklyCount}</span>
			</div>
			<div className='link-container'>
				<span className='nav-link'>
					<Link to="/edit">New Hen</Link>
				</span>
				<span className='nav-link'>
					<Link to="/">The Flock</Link>
				</span>
			</div>
		</div>)
	}
}

export default Nav;
