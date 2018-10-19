const app = {
    title: "Visibility Toggle", 
    text: "Hey! This is the text that shows up after clicking.",
    showButton: "Show details",
    hideButton: "Hide details"
};

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
                {visibility ? app.hideButton : app.showButton}
            </button>
            <p>{visibility === true ? app.text : ''}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
