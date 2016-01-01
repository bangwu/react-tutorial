class CommonBox extends React.Component{
	constructor(props){
    super(props)
    this.state = {commons: ['item one', 'item two', 'item three']}
  }

  render() {
		return (
			<div>
          <CommonList commons={this.state.commons}/>
          <CommonForm addItem={this.handleAddItem.bind(this)}/>
			</div>
		);
	}

  handleAddItem(value){
    this.setState({commons: this.state.commons.concat(value)});
  }
};

window.CommonBox = CommonBox;
