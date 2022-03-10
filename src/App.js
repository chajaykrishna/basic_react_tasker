import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTasks]= useState(false)
  const [tasks, setTasks] = useState([
    {id: 1,
    text: 'exam prep',
    day: 'thursday',
    remainder: true,
},
{id: 2,
  text: 'interview prep',
  day: 'Sunday',
  remainder: true,
}
]) 
// AddTask
const onAdd = (task)=> {
  
  const id = (tasks.length === 0 ? 1:tasks[tasks.length -1].id +1)
  // const newTask = {id, ...task}
  setTasks([...tasks,{id, ...task}])
  
  // setTasks(()=> returns ({...tasks, id:3, text:text, day:time,ramainder:remainder}))
}

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id ))
  console.log('delete', id)}


  const toggleReminder = (id) => {
    console.log(id);
    setTasks( tasks.map(task => (task.id === id) ?
    {...task, remainder : !task.remainder} : task)) 
    }
  // const doubleClick =(id) => {
  //   console.log('doubleClicked')
  // }

  return (
    <div className="container">
    <Header onAdd = {() => setShowAddTasks(!showAddTask)}
    showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={onAdd}/>}
    {tasks.length>0 ?
    (<Tasks tasks = {tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}/>) 
      : ('no tasks to display') } 

    </div>

  );
}

export default App
