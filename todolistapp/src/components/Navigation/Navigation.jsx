import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Navigation extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">To-Do List Application</span>
                <form className="form-inline my-2 my-lg-0 ml-auto">
                    <a href="https://github.com/Thamaltw97"><h1><span className="fa fa-github"></span></h1></a>
                </form>
            </nav>
        );
    }

}

export default Navigation;