import React from "react";
import ToDoItem from "./ToDoItem";
import todoData from "../toDoListData"
import InputTask from "./InputTask";

function Body(props) {
    // const tempBool = false

    const toDoItems = todoData.map(
        (item) => {
            return <ToDoItem taskName={item.name} taskDesc={item.description} taskTime={item.timeDue} taskDone={item.done} />
        }
    )
    console.log(toDoItems);

    return(
        <div className="container ">
            { props.viewBool ? <InputTask /> : toDoItems}
        </div>
    )
}

export default Body;