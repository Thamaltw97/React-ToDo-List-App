import React, {Component} from 'react';

import ToDoItem from "./ToDoItem";


class ToDoList extends Component{
    render() {
        const { items, clearList, handleDelete, handleModify, handleComplete, completed } = this.props;
        return (
            <div className="card card-body my-3">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            <h3 className="text-capitalize text-center">ToDo List</h3>
                            <br/>
                            {
                                items.map(item => {
                                    return(
                                        <ToDoItem
                                            key={item.id}
                                            title={item.title}
                                            handleDelete={() => handleDelete(item.id)}
                                            handleModify={() => handleModify(item.id)}
                                            handleComplete={() => handleComplete(item.id)}
                                            completed={item.completion}/>
                                    )
                                })
                            }

                            
                            <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>Clear List</button>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;