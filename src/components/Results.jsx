import React, {useState} from 'react';

const finished = {
    textDecorationLine: 'line-through'
}

const notFinished ={
    
}


const Results = props =>{

    const checkedHandler = e => {
        props.updateStatus(e.target.value);
    }
    return(
        <div>
            <table>
                <tr>
                    <th>Tasks</th>
                    <th>Done?</th>
                </tr>
                {
                    props.myList.map((task, i) => {
                        return <tr key= {i} style = {task.done ? finished : notFinished}> 
                            <td>{task.Task}</td>
                            <td>{task.done ? "Yes" : "No"}</td>
                            <td><input type = "checkbox" checked = {task.done} onChange = {checkedHandler} value = {i}/></td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default Results;