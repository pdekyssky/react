import "./AllTasks.css"
import Data from "../data"
import { useState } from "react"

const AllTasks = () => {
    //console.log(Data)
    
   const [myTask, setMytask] = useState(Data) // useState and add data to myTask

    const handleDelete = (id) => {       //delete button accept id 
        const newTaskArr = myTask.filter( (removeTask)=> {       //filter myTask
          return  removeTask.id != id       //remove id from data if if condition is false
        })

        setMytask(newTaskArr)    //setmyTask on new value
    }
    const handleDeleteAll = () => {
        setMytask([])    //delete all 
    }
    
    return ( 
        <div>
            {
                myTask.map( (oneTask) => { // maping over data(myTask) saving every1 in oneTask
                    const {id, name} = oneTask //destucturing object 

                    return (  // returning map value
                        <div className="one-task" key={id}>
                            <h4>{name}</h4>
                            <button type="button" onClick={()=>handleDelete(id)}>Delete</button>
                        </div>
                    )
                })
            } 
            <button type="button" className="delete-btn" onClick={handleDeleteAll}>Delete all</button>
        </div>
    )
}

export default AllTasks