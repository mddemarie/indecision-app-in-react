'use strict';

console.log('The app.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is an info.'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Marie Dedikova'
  ),
  React.createElement(
    'p',
    null,
    'Age: 30'
  ),
  React.createElement(
    'p',
    null,
    'Location: Berlin'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
