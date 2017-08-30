var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

var News = React.createClass({
  render: function() {
    var news;
    if (this.props.data) {
      news =
        this.props.data.map(function(item, index) {
          return (
            <div key={index}>
              <p className="news__author">{item.author}:</p>
              <p className="news__text">{item.text}</p>
            </div>
          )
        })
    } else {
      news =
        <div className="news">
          К сожалению, новостей нет.
        </div>
    }
    return (
      <div className="news">
        {news}
      </div>
    )
  }
})

var Article = React.createClass({
  render: function(){
    var author = this.props.data.author,
        text = this.props.data.text;
    return (
      <div className='article'>
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
      </div>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h3>Новости</h3>
        <News data = {my_news}/>
        <Article data = {{author: '123', text: '345'}}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
