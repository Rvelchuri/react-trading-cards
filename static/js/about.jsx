'use strict';

function About() {
  return <div>
        <p>About Me!</p>
        <div>
          <a href="/">Go to homepage</a>
          <h1> Trading Cards are fun!</h1> 
        </div> 
        <p><img src="/static/img/off-by-one.jpeg" /></p>
        </div>
}

ReactDOM.render(<About />, document.querySelector('#about'));
