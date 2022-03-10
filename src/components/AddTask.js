import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const formSubmit= (e)=>{
        e.preventDefault()

        if(!text){
            alert('task field cannot be empty')
            return
        }
        console.log(reminder)
        onAdd({text,time,reminder});
        setText('')
        setTime('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={formSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Task"
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Time</label>
            <input type='text' placeholder="Add Task"
            value={time}
            onChange={(e)=>setTime(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input 
            type='checkbox'
            checked = {reminder}
            value={reminder}
            onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" className='btn btn-block' value='Save Task'/>
      
    </form>
  )
}

export default AddTask
