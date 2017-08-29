var main = function() {
  var color = function(){
    if (((Math.random() * 10) & 1) == 1){
      return 'orange'
    }else{
      return 'black'
    }
  }
  var init_table = function(size) {
    var array = [];
    for (var j = 0; j < size; j++) {
      array[j] = []
      for (var i = 0; i < size; i++) {
        array[j].push(
          React.createElement('td', {
            style: {
              backgroundColor: color()
            },
            'data-test': '123'
          }, '.')
        )
      }
    }
    return array;
  }
  var loop = function(){
    var trs = []
    init_table(10).forEach(function(curr){
      trs.push(React.createElement('tr', null, ...curr))
    })
    ReactDOM.render(
      React.createElement('tbody', null, ...trs),
      document.getElementById('root')
    )
    setTimeout(loop, 500)
  }
  loop()
}
main()
