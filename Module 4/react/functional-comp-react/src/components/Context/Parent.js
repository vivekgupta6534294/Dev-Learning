import { useState } from "react"
import ChildA from "./ChildA";



function Parent(){

    const [firstName,setFirstName] = useState("Vivek");
    const [lastName,setLastName] = useState("Gupta");

    return(
        <div>
            <ChildA firstName = {firstName} lastName = {lastName}/>
        </div>
    )
}


export default Parent