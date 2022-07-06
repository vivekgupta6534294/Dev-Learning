import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state={
            tasks:["Learn Js","Learn DOM","Learn React"]
        }
    }
    render(){
        return(
            <div>
                <input type="text"></input>
                <button>Add Task</button>
                <ul>
                    {/* <li>
                        Task 1
                    </li>
                    <li>
                        Task 2
                    </li> */}
                    {this.state.tasks.map((ele)=>(
                        <li>
                            <p>{ele}</p>
                        </li>

                    ))}
                </ul>

            </div>
           
        )
    }
}
export default Todo;