class CommonForm extends React.Component{
	render(){
       return (
       	<div>
          <input onChange={this.handleChange.bind(this)} type="text" placeholder="item"/>
          <button onClick={this.handleClick.bind(this)}>add</button>
       	</div>
       	);
	};

	handleClick(){
      this.props.addItem(this.state.item);
	};

	handleChange(e){
		this.setState({item: e.target.value})
	}
}

window.CommonForm = CommonForm;