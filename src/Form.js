import { useState } from "react"
import { useDispatch } from "react-redux"
import { formsubmit } from "./features/formSlice"

export default function Form(){
    const [name, setName]= useState("")
    const [age, setAge]=useState()
    const dispatch = useDispatch()
    return(
        <div>
            <input type={"text"} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
            <input type={"number"} placeholder="age" onChange={(e)=>{setAge(e.target.value)}}/>
            <button onClick={()=> dispatch(formsubmit({name, age}))}>Submit</button>
        </div>
    )
}