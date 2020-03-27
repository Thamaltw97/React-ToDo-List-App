import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';

class ToDoItem extends Component{
    render() {
        const { title, handleDelete, handleModify, handleComplete, completed } = this.props;
        return (
            <li className={'list-group-item text-capitalize d-flex justify-content-between my-2' + (completed === true ? ' completed' : '')}>
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleComplete}>
                        <FontAwesomeIcon className="faicons" icon="check"></FontAwesomeIcon>
                    </span>
                    <span className="mx-2 text-primary" onClick={handleModify}>
                        <FontAwesomeIcon className="faicons" icon="pen"></FontAwesomeIcon>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <FontAwesomeIcon className="faicons" icon="trash"></FontAwesomeIcon>
                    </span>
                </div>
            </li>
        );
    }
}

export default ToDoItem;

//className="list-group-item text-capitalize d-flex justify-content-between my-2"