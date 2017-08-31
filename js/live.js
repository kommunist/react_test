var main = function() {

  var Cell = React.createClass({
    getInitialState: function(){
      return { style: { backgroundColor: 'black' } }
    },
    changeColor: function(){
      if (this.props.left.state.style.backgroundColor == 'orange'){
        this.setState({ style: {backgroundColor: 'green'} })
      }else{
        if (this.state.style.backgroundColor == 'black'){
          this.setState({ style: {backgroundColor: 'orange'} })
        }else{
          this.setState({ style: {backgroundColor: 'black'} })
        }
      }
    },
    render: function(){
      return (
        <td style={{ backgroundColor: this.state.style.backgroundColor }} onClick={ this.changeColor }>!</td>
      )
    },
    statics:{
      cons: function(){
        console.log(123)
      }
    }
  })

  var init_table = function(size) {
    var array = [];
    for (var j = 0; j < size; j++) {
      array[j] = []
      for (var i = 0; i < size; i++) {
        array[j].push(<Cell left={array[j][array.length - 2]}/>)
      }
    }
    return array;
  }

  var trs = []
  init_table(5).forEach(function(curr){
    trs.push(
      React.createElement('tr', null, ...curr)
    )
  })


  ReactDOM.render(
    React.createElement('tbody', null, ...trs),
    document.getElementById('root')
  )
}
main()
