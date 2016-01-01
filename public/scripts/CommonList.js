class CommonList extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    return (
      <ol>
        {this.initOptions()}
      </ol>
    );
  }

  initOptions(){
    return this.props.commons.map((item, _key)=>{
      return <Common title={item} key={_key}/>;
    });
  };
}

window.CommonList = CommonList;
