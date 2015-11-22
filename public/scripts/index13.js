var App = React.createClass({
    getInitialState: function() {
    	return {
    		data:[
    		  {id: 0, fname: "fname0", lname: "lname0"},
              {id: 1, fname: "fname1", lname: "lname1"},
              {id: 2, fname: "fname2", lname: "lname2"},
              {id: 3, fname: "fname3", lname: "lname3"},
              {id: 4, fname: "fname4", lname: "lname4"},
              {id: 5, fname: "fname5", lname: "lname5"},
              {id: 6, fname: "fname6", lname: "lname6"},
              {id: 7, fname: "fname7", lname: "lname7"},
              {id: 8, fname: "fname8", lname: "lname8"},
              {id: 9, fname: "fname9", lname: "lname9"}
    		] 
    	};
    },
	render: function() {
		var rows = this.state.data.map(function(person, i){
			return (<PersonRow data={person} key={i} />)
		});
		return (
			<table>
			  <tbody>
			    {rows}
			  </tbody>
			</table>
			);
	}

});

var PersonRow = React.createClass({

	render: function() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.fname}</td>
				<td>{this.props.data.lname}</td>
			</tr>
		);
	}

});

ReactDOM.render(<App></App>, document.getElementById('content'));
