var App = React.createClass({

	mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
    	return {
    		name: '' 
    	};
    },
	render: function() {
		return (
			<div>
              <form action="post">
                <input type="text" valueLink={this.linkState('name')} placeholder="Name"/>
                <label>{this.state.name}</label>
              </form>
			</div>
		);
	}

});

ReactDOM.render(<App></App>, document.getElementById('content'));