import React from "react";


function ToDoItem(props) {
    console.log(props)

    return(
        <div className="row ">
            <div className="col-5">
                <div className="row taskTitle">
                    <div className="col-12">
                        <h3>{props.taskName}</h3>
                    </div>
                </div>
                <div className="row taskTime">
                    <div className="col-12">
                        <h3>{props.taskTime}</h3>
                    </div>
                </div>
            </div>
            <div className="col-5 d-flex align-items-end">
                <h4>{props.taskDesc}</h4>
            </div>
            <div className="col-2 d-flex align-items-center">
                {/* <input type="checkbox" name="done" id="done" checked={props.taskDone} /> */}
                {props.taskDone ? <div className="checkboxTrue">Done!</div> : <div className="checkboxFalse">Unfinished!</div>}
                
                
                
            </div>
        </div>
    )
}

export default ToDoItem;