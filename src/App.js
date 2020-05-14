import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import ChangeCounters from './components/changeCounters';
import AddProducts from './components/addProducts';

class App extends Component {
	state = {
		counters: [],
	};

	submitProduct = (product, amount) => {
		if (product.length > 0) {
			if (amount === null) {
				const productName = product;
				const productAmount = 2;
				const index = this.state.counters.length;
				const counters = [...this.state.counters];
				counters[index] = {
					id: index + 1,
					value: productAmount,
					product: productName,
				};
				console.log(counters);
				this.setState({ counters });
			} else {
				const productName = product;
				const productValue = amount;
				const index = this.state.counters.length;
				const counters = [...this.state.counters];
				counters[index] = {
					id: index + 1,
					value: productValue,
					product: productName,
				};
				console.log(counters);
				this.setState({ counters });
			}
		}
	};

	handleIncreament = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecreament = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	handleDeleteAll = () => {
		const counters = [];
		this.setState({ counters });
	};

	handleReset = () => {
		// const index = this.state.counters.length
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<main className="container" style={{ alignItems: 'center' }}>
					<div className="mr-auto text-center">
						<NavBar
							totalCounters={
								this.state.counters.filter((c) => c.value > 0).length
							}
						/>
						<AddProducts onSubmitProduct={this.submitProduct} />
						<Counters
							counters={this.state.counters}
							onIncreament={this.handleIncreament}
							onDecreament={this.handleDecreament}
							onDelete={this.handleDelete}
						/>
					</div>
					{this.state.counters.length > 0 && (
						<ChangeCounters
							onReset={this.handleReset}
							onDeleteAll={this.handleDeleteAll}
						/>
					)}
				</main>
			</React.Fragment>
		);
	}
}

export default App;
