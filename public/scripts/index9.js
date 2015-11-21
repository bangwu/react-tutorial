var Button = React.createClass({
	getInitialState: function() {
		return {
			val:0 
		};
	},
	componentWillMount: function() {
		console.log('mounting');
	},
	componentDidMount: function() {
		this.min = setInterval(this.update, 500);
	},
	componentWillUnmount: function() {
		console.log('bye');
		clearInterval(this.min);
	},
    update: function() {
    	this.setState({val: this.state.val+1});
    },
	render: function() {
		console.log('render');
		return (
			<div>
              <button onClick={this.update}>{this.state.val}</button>
			</div>
		);
	}
});

var App = React.createClass({
    mount: function() {
    	ReactDOM.render(<Button />, document.getElementById('app'));
    },
    unmount: function() {
    	ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    },
	render: function() {
		return (
			<div>
              <button onClick={this.mount}>mount</button>
              <button onClick={this.unmount}>unmount</button>
              <div id="app"></div>
			</div>
		);
	}

});

ReactDOM.render(<App />, document.getElementById('content'));
