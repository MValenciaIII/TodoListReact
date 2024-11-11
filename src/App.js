import React, {useState} from "react";
import "./style.css"
import Header from "./components/Header";
import Body from "./components/Body";


function App() {
    const [view, setView] = useState(true);

    return(
        <div className="container conBackground">
           <div className="row d-flex justify-content-center align-items-center">
            <div className="col-7 appColBackground itemBorder">
                <Header viewFunc={setView} />
                <Body viewBool={view} />
            </div>
           </div>
        </div>
    )
}

export default App;