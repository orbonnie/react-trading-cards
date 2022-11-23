'use strict';

function Homepage() {
  return(
    <div>
      <h2>Welcome to Our Trading Card Game!</h2>
      <div>
        <a href="/cards">CARDS</a>
      </div>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
