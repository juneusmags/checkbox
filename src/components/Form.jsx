import React, {useState} from 'react';


const Form = props =>{
    //const[Task, setTask] = useState("");

    const [myForm, setMyForm] = useState({
        Task : "",
        done : true
    });

    const onChangeHandler = e =>{
        setMyForm({...myForm, [e.target.name] : e.target.value});
    }

    const onSubmitHandler = e =>{
        e.preventDefault();
        props.newTask(myForm);

    }

    const checkedHandler = e =>{
        setMyForm({...myForm, [e.target.name] : e.target.checked});
    }

 
    return(
        <div>
            <h1>Add Task</h1>
            <form onSubmit = {onSubmitHandler}>
                <label>Task</label>
                <input type = "text" onChange = {onChangeHandler} name = "Task"></input>

                
                <input type = "checkbox" onChange = {checkedHandler} name = "done" checked = {myForm.done}></input>
                <label>Done?</label>

                <input type = "submit" value ="Add"></input>
            </form>
        </div>
    )
}

export default Form;