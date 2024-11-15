import React, { useState } from "react";


function ToDoItem(props) {
    //! ALL THIS CODE IS ONLY EXISTING TO ITSELF
    console.log(props)
    //? This creates an equivalent "local" variable that hooks on this this component and on this current version
    const [checklistBool, setChecklistBool] = useState(false)
    console.log(setChecklistBool)

    function changeBool() {
        setChecklistBool(prevChecklistBool => !prevChecklistBool)
    }

    return(
        <div className="row ">
            <div className="col-5">
                <div className="row taskTitle">
                    <div className="col-12">
                        {checklistBool ? <s><h3>{props.taskName}</h3></s> :<h3>{props.taskName}</h3>}
                    </div>
                </div>
                <div className="row taskTime">
                    <div className="col-12">
                        {checklistBool ? <s><h3>{props.taskTime}</h3></s> :<h3>{props.taskTime}</h3>}
                    </div>
                </div>
            </div>
            <div className="col-5 d-flex align-items-end">
                {checklistBool ? <s><h4>{props.taskDesc}</h4></s> :<h4>{props.taskDesc}</h4>}
            </div>
            <div className="col-2 d-flex align-items-center">
                {/* <input type="checkbox" name="done" id="done" checked={props.taskDone} /> */}
                {checklistBool ? <div onClick={changeBool} className="checkboxTrue">Done!</div> : <div onClick={changeBool} className="checkboxFalse">Unfinished!</div>}
                
                
                
            </div>
        </div>
    )
}

export default ToDoItem;