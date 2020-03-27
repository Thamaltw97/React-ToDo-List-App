import React, {Component} from 'react';

class ToDoInput extends Component{
    render() {
        const { item, handleEdit, handleSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h3 className="text-capitalize text-center">Add ToDo Item</h3>
                            <br/>
                            <input id="itemId" type="text" className="form-control text-capitalize" maxLength="50" placeholder="Add ToDo Item" value={item} onChange={handleEdit} />
                            {/*<button type="button" className="btn btn-block btn-primary mt-1" id="btnSubmit">Submit</button>*/}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <button type="submit" className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"} id="btnSubmit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ToDoInput;

