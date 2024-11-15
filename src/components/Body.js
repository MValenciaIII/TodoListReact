import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import todoData from "../toDoListData"
import InputTask from "./InputTask";


//* Step One: Create input form;
//* Step one 1/2: seeing change in our useState object.
//* Step two: OnSubmit send data back to "todoDataa"
//? step Three: If finished strikethrough
//? If a function is attached to a component it should update it's own values

function Body(props) {
    //TODO Since The Todo list data isn't needed anywhere else (Specically Header component) We can make the use state array list of objects here.
    const [todoDataa, setToDoData] = useState([])
    //TODO This is our To Do item template. We'll use this as a scaffold.
    const [todoTemplate, setToDoTemplate] = useState({
        id: "",
        title: "",
        description: "",
        time: "",

    })

    function handleEvent(event) {

        const {name, value, checked, type} = event.target;

        setToDoTemplate(
            (prevTodoTemplate => {
                return {
                    ...prevTodoTemplate,
                    [name]: type === "checkbox" ? checked : value
                }
            })
        )

    }



    function submit(event) {
        //PREVENT Webpage from refreshing
        event.preventDefault();

        //? When submit, send this template back to the arraylist
        setToDoData(prevToDoData => [...prevToDoData, todoTemplate])

        //clear the inputs
        setToDoTemplate({
            title: "",
            description: "",
            time: "",

        })

    }





    const toDoItems = todoDataa.map(
        (item) => {
            return <ToDoItem taskName={item.title} taskDesc={item.description} taskTime={item.time} />
        }
    )
    console.log(toDoItems);

    return(
        <div className="container ">
            { props.viewBool ? <InputTask viewTitle={todoTemplate.title} viewDesc={todoTemplate.description} viewTime={todoTemplate.time} setTemplate={handleEvent} setTaskList={submit}/> : toDoItems}
        </div>
    )
}

export default Body;