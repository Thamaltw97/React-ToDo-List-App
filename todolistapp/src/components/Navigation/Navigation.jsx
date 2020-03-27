import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Navigation extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">ToDo App</span>
            </nav>
        );
    }

}

export default Navigation;