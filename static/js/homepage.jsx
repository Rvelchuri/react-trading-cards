'use strict';

function Homepage() {
  return <div>
        <p>Welcome!</p>
        <div>
        <p><a href="/about">View about page</a></p>
        <p><a href="/cards">View trading cards</a></p>
        </div> 
        <p><img src="/static/img/balloonicorn.jpg" /></p>
        </div>
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
