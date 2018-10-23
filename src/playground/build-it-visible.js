class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <p>{this.state.visibility}</p>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                <p>{this.state.visibility === true ? 'Hey! This is the text that shows up after clicking.' : ''}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: "Visibility Toggle", 
//     text: "Hey! This is the text that shows up after clicking.",
//     showButton: "Show details",
//     hideButton: "Hide details"
// };

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderApp();
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? app.hideButton : app.showButton}
//             </button>
//             <p>{visibility === true ? app.text : ''}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderApp();
