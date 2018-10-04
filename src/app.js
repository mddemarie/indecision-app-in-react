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

let count = 0;
const addOne = () => {
  console.log('addOne');
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={() => {
      console.log('some value here');
    }}>+1</button>
  </div>
)

console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);