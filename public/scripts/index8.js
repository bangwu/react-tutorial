var Button = React.createClass({
        getInitialState: function(){
          return{
            val: 0
          }
        },

        update: function(e){
          this.setState({
            val: this.state.val+1
          })
        },

        render() {
          return (
            <button onClick={this.update}>{this.state.val}</button>
          );
        }
      });

var App = React.createClass({
    mount: function(){
      ReactDOM.render(<Button />, document.getElementById('app'));
    },
    unmount: function(){
      React.unmountComponentAtNode(document.getElementById('app'));
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

