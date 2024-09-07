import { useState } from "react"
import DisplayCounter from "../DisplayCounter"

export default function Counter() {
    
    const [number, setNumber] = useState(0)

    function add() {
        let newNumber = number + 1
        setNumber(newNumber)
    }
    
    return (
        <div>
            <h1>Counter</h1>
            <DisplayCounter number={number}/>
            <button onClick={() => add()}>Add number</button>
        </div>
    )
}