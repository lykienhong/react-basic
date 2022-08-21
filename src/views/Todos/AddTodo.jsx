import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component{
    state = {
        title : "",
    }

    handleTitle = (event) => {
        this.setState({
            title : event.target.value
        })
    }

    handleAdd = () => {
        if(!this.state.title){
            toast.error("Title can't be null")
            return;
            //if(undifined/null/empty) => false
        }
        let todo = {
            id : Math.floor(Math.random() * 1001),
            title : this.state.title
        }

        this.props.addNewTodo(todo)
        this.setState({
            title:""
        })
    }
    
    render(){
        let {title} = this.state;
        return(
            <div className="add-todo">
                    <input type="text" value={title} onChange={(event) => this.handleTitle(event)}/>
                    <button type="button" className="add" onClick={() => this.handleAdd()}>Add</button>
            </div>
        )
    }
}

export default AddTodo
