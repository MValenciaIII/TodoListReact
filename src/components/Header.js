import React from "react";


function Header(props) {
    console.log(props)
    function switchView() {
        props.viewFunc(prevView => !prevView)
    }

    return(
        <div className="row text-center">
            <div className="col-12">
                <h1>Mike's To Do List</h1>
            </div>
            <button onClick={switchView}>Switch</button>
        </div>
    )
}

export default Header;