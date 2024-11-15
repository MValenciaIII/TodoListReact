import React from "react";


function InputTask(props) {
    console.log(props)

    //? I have to make the function here due to handling it's own data.

    return(
        <div className="row">
            <div className="col-12 inputTitle">
                <h1>Task Input</h1>
            </div>
            <form onSubmit={props.setTaskList}>
                <div className="col-12 inputBoxes">
                    <div className="row">
                        <div className="col-5 inputTitle">
                            <input onChange={props.setTemplate} type="text" name="title" value={props.viewTitle} />
                        </div>
                        <div className="col-5 inputTime">
                            <input onChange={props.setTemplate} type="time" name="time" value={props.viewTime}/>
                        </div>
                        <div className="col-2">
                            <button>Submit</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 inputDesc">
                            <input onChange={props.setTemplate} type="text" name="description" value={props.viewDesc} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default InputTask;