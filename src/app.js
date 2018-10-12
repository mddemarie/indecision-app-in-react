console.log('The app.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
    <ol>
      <li>Item {app.options[0]}</li>
      <li>Item {app.options[1]}</li>
    </ol>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
