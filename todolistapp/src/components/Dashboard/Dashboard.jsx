import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Dashboard() {
    return(
        <div className="container pt-3" >
        <div className="card bg-light">

            <div className="card-body" align="center">
                <h1>TODO APP</h1>
                <br/>
                <p>This is a simple To-Do List Application which has been built using only ReactJS. There are few functions that can be used.<br/>
                A user can add a particular item to the To-Do List by entering the item at the text box and clicking the submit button. Then it will added to the list.<br/>
                User can edit items which has not been completed or deleted. Completed items will be displayed at the bottom of the list. And after completion<br/>
                user can not edit the item. Also user can delete the item and the particular item will be removed from the list. Enjoy !</p>
            </div>

        </div>
        </div>

    );

}

export default Dashboard;