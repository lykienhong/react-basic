import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: "todo1", title: "Doing homework" },
            { id: "todo2", title: "Fix bug" },
            { id: "todo3", title: "Play game" },
        ],
        editTodo: {

        }
    }



    addNewTodo = (todo) => {
        //let a = this.state.listTodos
        //a.push(todo)

        this.setState({
            listTodos: [...this.state.listTodos, todo],
            //listTodos : a
        })
        toast.success("Add Success")
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })
    }

    handleEdit = (todo) => {
        let {editTodo , listTodos} = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;

        //save
        if(isEmpty === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos : listTodosCopy,
                editTodo:{}
            })
            toast.success("Update to do success")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo : editTodoCopy
        })
    }

    render() {
        //let listTodos = this.state.listTodos
        let { listTodos, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        console.log(">>>> check empty", isEmpty)
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                {isEmpty === true ?
                                    <span> {index + 1} - {item.title}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>{index + 1} - <input value={editTodo.title} 
                                                onChange={(event) => this.handleOnchangeEditTodo(event)}
                                            /></span>
                                            :
                                            <span> {index + 1} - {item.title}</span>
                                        }
                                    </>
                                }
                                <button className="edit" onClick={() => this.handleEdit(item)}>
                                    {isEmpty === false && editTodo.id === item.id ? "Save" : "Edit"}
                                    </button>
                                <button className="delete"
                                    onClick={() => this.handleDeleteTodo(item)}
                                >Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListTodo