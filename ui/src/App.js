// You have to import any css or components to be used here
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// For example importing main
import Main from "./components/MainComponent";

// Using this because we are using router, we need to wrap eveyrhting
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        // App is only gonna load in main component
        // The main has 1 header and 1 bottom (that doesn't change)
        // But it's also going to have a "middle" that changes depending on use case (i.e. nav bar)
        <div className="App">
            {/* Callign the main component */}
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </div>
    );
}

// For App to be used in index.js
export default App;
