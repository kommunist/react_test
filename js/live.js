var main = function() {
  function concatKeys(first, second){
    return String(first).concat(String(second))
  }

  function numerToColor(numer){
    return numer == 1 ? 'black' : 'orange'
  }

  var Cell = React.createClass({
    getInitialState: function(){
      return {style: this.props.color}
    },
    changeColor: function(){
      if (this.state.style == 1){ this.setState({ style: 0 })}
      else{ this.setState({ style: 1 }) }
    },
    manualChangeColor: function(){
      this.props.manualChangeColorFunction()
      this.changeColor()
    },
    render: function(){
      return (
        <td
        style={{ backgroundColor: numerToColor(this.state.style) }}
        onClick = {this.manualChangeColor} >!</td>
      )
    }
  })

  var Board = React.createClass({
    manualChangeColor: function(first, second){
      console.log(123)
      // здесь нужно изменить состояние матрицы
    },
    getInitialState: function(){
      var size = 10;
      var array = [];
      for (var j = 0; j < size; j++) {
        array[j] = []
        for (var i = 0; i < size; i++) {
          array[j].push(Math.round(Math.random()))
        }
      }
      return {arr: array}
    },
    render: function(){
      var manualChangeColorFunction = this.manualChangeColor
      var trs = this.state.arr.map(function(arr_line, i){
        var tds = []
        tds = arr_line.map(function(td_arr, j){
          return( <Cell
                   key = { concatKeys(i, j) }
                   color = { td_arr }
                   manualChangeColorFunction = { manualChangeColorFunction }/> )
        })
        return( <tr key = {i}> { tds.map(function(a){ return a }) } </tr> )
      })
      return ( <tbody> { trs.map(function(a){ return a }) } </tbody> )
    }
  })

  ReactDOM.render(
    <Board />,
    document.getElementById('root')
  )
}
main()
