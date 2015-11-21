var Button = React.createClass({
	getInitialState: function() {
		return {
			increasing: false 
		};
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({increasing: nextProps.val > this.props.val});
	},
    update: function() {
    	this.setProps({val: this.props.val+1});
    },
	render: function() {
		console.log(this.state.increasing)
		return (
			<div>
              <button onClick={this.update}>{this.props.val}</button>
			</div>
		);
	}
});

ReactDOM.render(<Button val={0}/>, document.getElementById('content'));