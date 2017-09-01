var main = function() {
  function concatKeys(first, second){
    return String(first).concat(String(second))
  }

  var Cell = React.createClass({
    getInitialState: function(){
      return { style: { backgroundColor: 'black' } }
    },
    changeColor: function(){
      if (this.state.style.backgroundColor == 'black'){
        this.setState({ style: {backgroundColor: 'orange'} })
      }else{
        this.setState({ style: {backgroundColor: 'black'} })
      }
    },
    render: function(){
      return (
        <td style={{ backgroundColor: this.state.style.backgroundColor }} onClick={ this.changeColor }>!</td>
      )
    }
  })

  var Board = React.createClass({
    getInitialState: function(){
      var size = 10;
      var array = [];
      for (var j = 0; j < size; j++) {
        array[j] = []
        for (var i = 0; i < size; i++) {
          array[j].push(0)
        }
      }
      return {arr: array}
    },
    render: function(){
      var trs = this.state.arr.map(function(arr_line, i){
        var tds = []
        tds = arr_line.map(function(td_arr, j){
          var color = td_arr == 0 ? 'black' : 'orange'
          return(
            <td style = {{ backgroundColor: color }} key = {concatKeys(i, j)}></td>
          )
        })
        return(
          <tr key = {i}>
            {
              tds.map(function(a){
                return a
              })
            }
          </tr>
        )
      })
      return (
        <tbody>
          { trs.map(function(a){ return a }) }
        </tbody>
      )
    }
  })

  // var init_table = function(size) {
  //   var array = [];
  //   for (var j = 0; j < size; j++) {
  //     array[j] = []
  //     for (var i = 0; i < size; i++) {
  //       array[j].push(
  //         <Cell left={array[j][array[j].length - 1]}/>
  //       )
  //     }
  //   }
  //   return array;
  // }

  // var trs = []
  // init_table(3).forEach(function(curr){
  //   trs.push(
  //     React.createElement('tr', null, ...curr)
  //   )
  // })

  ReactDOM.render(
    <Board />,
    // React.createElement('tbody', null, ...trs),
    document.getElementById('root')
  )
}
main()
