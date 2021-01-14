import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";


function App(props) {
    return (
        <Router>
            <div className="App">
                <Header dispatch={props.dispatch}/>
            </div>
        </Router>
    );
}

export default App;
