var App = React.createClass({
	getInitialState: function() {
		return {
			red: 0
		};
	},
    update: function() {
      this.setState({red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value});
    },
	render: function() {
		return (
            <div>
                <NumberInput ref="red" min={0} max={255} step={1} val={this.state.red} label="red" type="number" update={this.update}></NumberInput>
            </div>
		);
	}

});

var NumberInput = React.createClass({
    propTypes: {
    	min: React.PropTypes.number,
    	max: React.PropTypes.number,
    	step: React.PropTypes.number,
    	val: React.PropTypes.number,
    	label: React.PropTypes.string,
    	update: React.PropTypes.func,
    	type: React.PropTypes.oneOf(['number', 'range'])
    },

    getDefaultProps: function() {
    	return {
    		min: 0,
    		max: 255,
    		step: 1,
    		val: 0,
    		label: '',
    		type: 'range'
    	};
    },
	render: function() {

		return (
			<div>
                <input ref="inp"
                type={this.props.type}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                defaultValue= {this.props.val} 
                onChange={this.props.update}/>
                <label>{this.props.label}-{this.props.val}</label>
			</div>
		);
	}

});

ReactDOM.render(<App></App>, document.getElementById('content'));