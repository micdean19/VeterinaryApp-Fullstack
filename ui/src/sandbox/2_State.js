// So this is a component that has an elment of h1,h2
function tick() {
    const element = (
        <div>
            <h1> Hello world </h1>
            <h2> Time is {new Date().toLocaleTimeString()} </h2>
        </div>
    );

    // we could render the element using:
    /*
      ReactDOM.render(
        element,
        document.getElementById('root')
    );
    */

}

// But a state is to move things into its own component that is reusable and encapsulated
// Every state has a render method, a prop and a constructor.
// They also extend the component

// State is similar to prop (arguments as dictionaries) exdcept it is private and fully controllled by the component


