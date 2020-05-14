import React, { Component } from 'react';

class Counter extends Component {
	render() {
		return (
			<div>
				<div className="row mt-4">
					<div className="col-4"></div>
					<div className="col-1">
						<span className="font-weight-bold">
							<p style={{ marginTop: '5px', fontSize: '20px' }}>
								{this.props.counter.product}
							</p>
						</span>
					</div>
					<div className="col-4">
						<span className={this.getBadgeClasses()}>{this.formatCount()}</span>

						<button
							onClick={() => this.props.onIncreament(this.props.counter)}
							className="btn btn-secondary btn-sm m-1"
						>
							+
						</button>
						<button
							onClick={() => this.props.onDecreament(this.props.counter)}
							className="btn btn-secondary btn-sm m-1"
							style={{ paddingLeft: '10px', paddingRight: '10px' }}
						>
							-
						</button>
						<button
							onClick={() => this.props.onDelete(this.props.counter.id)}
							className="btn btn-danger btn-sm m-2"
						>
							Delete
						</button>
					</div>
					<div className="col-3"></div>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge badge-';
		classes +=
			this.props.counter.value === 0
				? 'warning m-2'
				: 'primary mt-2 mb-2 ml-3 mr-3';
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;
