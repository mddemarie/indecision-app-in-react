console.log('The app.js is running!');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is an info.</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Marie Dedikova</h1>
    <p>Age: 30</p>
    <p>Location: Berlin</p>  
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);