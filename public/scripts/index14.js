var Transformer = React.createClass({
    getInitialState: function() {
    	return {
    		input: '',
    		output: '',
    		err: '' 
    	};
    },
    update: function (e) {
    	console.log("update");
        var code = e.target.value;
        try{
        	this.setState({
              output: JSXTransformer.transform(code).code,
              err: ''		
        	});
          
        }catch(err){
            this.setState({
            	err: err.message
            });
        }
    },
	render: function() {
		return (
            <div>
              <pre>{this.state.err}</pre>
              <textarea defaultValue={this.state.input} cols="30" rows="10" onChange={this.update}></textarea>
              <pre>{this.state.output}</pre>
            </div>
		);
	}

});

ReactDOM.render(<Transformer></Transformer>, document.getElementById('content'));
