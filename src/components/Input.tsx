import { useState } from "react";

function Input() {
    const [input, setInput] = useState("")
    function eventoDeonChange (event: React.ChangeEvent<HTMLInputElement>) {
       setInput(event.target.value)
    }
    return(
        <div>
            <input type="text" value={input} onChange={eventoDeonChange}></input>
        </div>
    )
}
export default Input;