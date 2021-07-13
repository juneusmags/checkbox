import logo from './logo.svg';
import Form from './components/Form';
import Results from './components/Results';

import {useState} from 'react';

function App() {
  const [listOfTasks, setTasks] = useState([]);

  const addTask = (myForm) =>{
    setTasks([...listOfTasks, myForm]);
  }

  const update = i => {
    listOfTasks[i].done = !listOfTasks[i].done;
    setTasks([...listOfTasks]);
  }
  return (
    <div className="App">
      <Form newTask={addTask}/>
      <Results myList ={listOfTasks} updateStatus = {update}/>
    </div>
  );
}

export default App;
