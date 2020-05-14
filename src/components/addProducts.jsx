import React, { Component } from 'react';

class AddProducts extends Component {
	sendProduct = (event) => {
		event.preventDefault();
		if (this.amountInput.value === '') {
			this.props.onSubmitProduct(this.productInput.value, 0);
		} else {
			this.props.onSubmitProduct(
				this.productInput.value,
				this.amountInput.value,
			);
		}
		this.productInput.value = '';
		this.amountInput.value = '';
	};
	render() {
		return (
			<div className="row mt-3">
				<div className="col-2"></div>
				<div className="col-8">
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<form className="form-inline mt-2" onSubmit={this.sendProduct}>
							<input
								className="form-control mr-sm-2"
								type="text"
								name="product"
								placeholder="Add Product"
								style={{ width: '200px' }}
								ref={(input) => (this.productInput = input)}
							/>
							<input
								className="form-control mr-sm-2"
								type="number"
								name="amount"
								placeholder="Quantity"
								style={{ width: '110px' }}
								ref={(input) => (this.amountInput = input)}
							/>
							<input
								type="submit"
								className="btn btn-outline-success my-2 my-sm-0 mr-2"
								onClick={this.sendProduct}
							/>
						</form>
					</div>
				</div>
				<div className="col-2"></div>
			</div>
		);
	}
}

export default AddProducts;
