var main = function() {
  var loop = function() {
    var size = 50;
    var tds = [];
    var trs = [];
    for (var j = 0; j < size; j++) {
      for (var i = 0; i < size; i++) {
        tds.push(React.createElement('td', {
          style: {
            backgroundColor: 'orange'
          }
        }, '.'))
      }
      trs.push(React.createElement('tr', null, ...tds))
      tds = []
    }
    ReactDOM.render(
      React.createElement('tbody', null, ...trs),
      document.getElementById('root')
    )
    setTimeout(loop, 1000)
  }
  loop()
};
main()
