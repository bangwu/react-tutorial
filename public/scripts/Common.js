class Common extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isFinished: false};
  }
  render(){
    return (
      <li onClick={this.handleClick.bind(this)}>{this.titleState()}</li>
    );
  };
  
  titleState(){
  	if(this.state.isFinished){
  		return <del>{this.props.title}</del>
  	}
  	else{
  		return this.props.title;
  	}
  }

  handleClick(e){
    this.setState({isFinished: !this.state.isFinished})
  };

}

window.Common = Common;
