import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Dashboard() {
    return(
        <div>

            <div className="container-fluid mt-4" align="center">
                <h1 className="mb-4">TODO APP</h1>
            </div>

            <div className="container-fluid mt-4" align="center">
                <p>This is a simple To-Do List Application which has been built using only ReactJS. There are few functions that can be used.<br/>
                A user can add a particular item to the To-Do List by entering the item at the text box and clicking the submit button. Then it will added to the list.<br/>
                User can edit items which has not been completed or deleted. Completed items will be displayed at the bottom of the list. And after completion<br/>
                user can not edit the item. Also user can delete the item and the particular item will be removed from the list. Enjoy !</p>
            </div>


            <br/>

            {/*<div className="row">*/}

            {/*    <div className="container-fluid mt-4 col-md-6">*/}
            {/*        <div class="row">*/}
            {/*            <div class="col-md-12">*/}
            {/*                <div class="clsItemTable">*/}
            {/*                    <table id="tableId" class="display table " tabIndex={1}></table>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </div>

    );

}

export default Dashboard;