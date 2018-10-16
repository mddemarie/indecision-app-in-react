const app = {
    title: "Visibility Toggle", 
    text: "Hey! This is the text that shows up after clicking.",
    showButton: "Show details",
    hideButton: "Hide details"
};

const onShowDetails = () => {
    return <p>{app.text}</p> // TODO: this part does not work yet!
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onShowDetails}>{app.showButton}</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
