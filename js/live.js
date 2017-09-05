var main = function() {
  function concatKeys(first, second){
    return String(first).concat(String(second))
  }

  function numerToColor(numer){
    return numer == 1 ? 'black' : 'orange'
  }

  var Cell = React.createClass({
    manualChangeColor: function(){
      this.props.ChangeFunction(this.props.row, this.props.column)
    },
    render: function(){
      return (
        <td
        style={ { backgroundColor: numerToColor(this.props.color) } }
        onClick = {this.manualChangeColor} ></td>
      )
    }
  })

  var Board = React.createClass({
    manualChangeColor: function(row, column){
      var curr_state = this.state.arr
      curr_state[row][column] = (curr_state[row][column] + 1) % 2
      this.setState({ arr: curr_state })
    },
    getInitialState: function(){
      var size = this.props.size;
      var array = [];
      for (var j = 0; j < size; j++) {
        array[j] = []
        for (var i = 0; i < size; i++) {
          array[j].push(Math.round(Math.random()))
        }
      }
      return {arr: array}
    },
    start_loop: function() {
      var tr = []
      var size = this.props.size
      var c_arr = this.state.arr

      var check_others = function(i, j){
        var l = j - 1 < 0 ? size - 1 : j - 1
        var r = j + 1 == size ? 0 : j + 1
        var d = i + 1 == size ? 0 : i + 1
        var u = i - 1 < 0 ? size - 1 : i - 1
        var result = [
          c_arr[u][l],
          c_arr[u][j],
          c_arr[u][r],
          c_arr[i][l],
          c_arr[i][r],
          c_arr[d][l],
          c_arr[d][j],
          c_arr[d][r]
        ].reduce(function(accum, curr){ return accum + curr })
        return result
      }

      var trs = []
      this.state.arr.map(function(el, i){
        trs.push(
          el.map(function(m, j){
            var result = check_others(i, j, size)
            if (c_arr[i][j] == 0){
              return result == 3 ? 1 : 0
            }else{
              return (result == 2 || result == 3) ? 1 : 0
            }
          })
        )
      })
      this.setState({arr: trs})
      setTimeout(this.start_loop, 10)
    },
    render: function(){
      var manualChangeColorFunction = this.manualChangeColor
      var trs = this.state.arr.map(function(arr_line, i){
        var tds = []
        tds = arr_line.map(function(td_arr, j){
          return( <Cell
                   key = { concatKeys(i, j) }
                   color = { td_arr }
                   ChangeFunction = { manualChangeColorFunction }
                   row = { i }
                   column = { j }/> )
        })
        return( <tr key = {i}>{ tds }</tr> )
      })
      return (
        <div>
          <table className="table table-bordered">
            <tbody>
              { trs }
            </tbody>
          </table>
          <button onClick={ this.start_loop }>Старт</button>
        </div>
      )
    }
  })

  ReactDOM.render(
    <Board size = { 100 }/>,
    document.getElementById('root')
  )
}
main()
