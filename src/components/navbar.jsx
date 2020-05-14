import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			// <nav className='navbar navbar-light bg-light'>
				<span className='navbar-brand display-4 font-weight-bold mt-3'>
					Total Products
					<span className='badge badge-pill badge-secondary ml-3'>
						{this.props.totalCounters}
					</span>
				</span>
			// </nav>
		);
	}
}

export default NavBar;
