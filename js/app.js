var main = function() {
  var init_table = function(size) {
    var array = [];
    for (var j = 0; j < size; j++) {
      array[j] = []
      for (var i = 0; i < size; i++) {
        array[j].push(
          {
            object:
              React.createElement('td', {
                style: {
                  backgroundColor: 'orange'
                },
                'data-test': '123'
              }, '.'),
            state: 'orange'
          }
        )
      }
    }
  }
  return array;
}
var start = init_table(10)
console.log(start)
  // trs.push(React.createElement('tr', null, ...tds))
  // tds = []
  // ReactDOM.render(
  //   React.createElement('tbody', null, ...trs),
  //   document.getElementById('root')
  // )
  // setTimeout(loop, 1000)
};
main()
