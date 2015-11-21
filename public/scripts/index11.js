var App = React.createClass({

	render: function() {
		return (
	        <div>
                <Button txt="this is the button"/>
                <br/>
                <Label txt="this is the Label"/>
	        </div>
		);
	}

});

var ReactMaxin = {
	getInitialState: function() {
		return {
			count: 0
		};
	},
	componentWillMount: function() {
		console.log("mounting")
	},
	increaseCount: function() {
		this.setState({count: this.state.count+1});
	}
}

var Button = React.createClass({

    mixins: [ReactMaxin],
	render: function() {
		return (
	        <button onClick={this.increaseCount}>{this.props.txt}-{this.state.count}</button>
		);
	}

});


var Label = React.createClass({
    mixins: [ReactMaxin],
    componentDidMount: function() {
    	console.log('increasing');
    	setInterval(this.increaseCount, 1000);
    },
	render: function() {
		return (
	        <label>{this.props.txt}-{this.state.count}</label>
		);
	}

});

ReactDOM.render(<App />, document.getElementById('content'));