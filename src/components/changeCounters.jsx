import React, { Component } from 'react';

class ChangeCounters extends Component {
	
	render() {
		return (
			<React.Fragment>
				<div className="row mt-3">
					<div className="col-6"></div>
					<div className="col-3">
                        <button
							onClick={this.props.onReset}
							className="btn btn-primary my-2 my-sm-0 mr-2"
						>
							Reset
						</button>
						<button
							onClick={this.props.onDeleteAll}
							className="btn btn-danger my-2 my-sm-0"
						>
							Delete All
						</button>
					</div>
					<div className="col-3"></div>
				</div>
			</React.Fragment>
		);
	}
}

export default ChangeCounters;
