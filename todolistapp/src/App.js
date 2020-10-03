import React, {Component} from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ToDoInput from "./components/Dashboard/ToDoInput";
import ToDoList from "./components/Dashboard/ToDoList";
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'react-uuid';
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import ParticlesBg from "particles-bg";
import Navigation from './components/Navigation/Navigation';
import Dashboard from "./components/Dashboard/Dashboard";
import FooterHandler from "./components/Footer/Footer";

library.add(faTrash);
library.add(faPen);
library.add(faCheck);

class App extends Component {

    constructor() {
        super();

        this.state = {
            items: [],
            id: uuid(),
            item: "",
            editItem: false,
            completed: false
        };

    }

    handleEdit = e => {
        console.log("HandleEdit")
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.item !== ""){

            const newItem = {
                id:uuid(),
                title:this.state.item,
                completion: false
            };
            const updatedItems = [newItem, ...this.state.items];

            this.setState({
                items:updatedItems,
                item:'',
                id:uuid(),
                editItem: false,
                completed: false
            });

        }

    };

    clearList = () => {
      this.setState({
         items: []
      });
    };

    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item =>
            item.id !== id);

        this.setState({
            items: filteredItems
        });
    };

    handleModify = (id) => {


        const filteredItems = this.state.items.filter(item =>
            item.id !== id);

        const selectedItem = this.state.items.find(item => item.id === id);
        if (selectedItem.completion === false){
            this.setState({
                items: filteredItems,
                item: selectedItem.title,
                editItem: true,
                id: id
            });
        }

    };

    handleComplete = (id) => {
        const filteredItems = this.state.items.filter(item =>
            item.id !== id);

        const completedItem = this.state.items.find(item => item.id === id);

        this.setState({
            items: filteredItems,
            editItem: false,
            completed: true,
            id: id
        });

        const newItem = {
            id:id,
            title:completedItem.title,
            completion: true
        };

        const updatedItems = [...this.state.items.filter(item => item.id !== id),newItem];

        this.setState({
            items:updatedItems,
            item: ""
        });

    };

    render() {
        return (
            <div>
                {(
                    <div>
                        <Navigation/>
                        <Dashboard/>
                        <div className="row">
                            <div className="container-fluid col-md-6">
                                <ToDoInput item={this.state.item} handleEdit={this.handleEdit} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
                            </div>
                            <div className="container-fluid col-md-6">
                                <ToDoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleModify={this.handleModify} handleComplete={this.handleComplete} completed={this.handleComplete.completion}/>
                            </div>
                        </div>
                        <div>
                            <FooterHandler/>
                        </div>
                        <ParticlesBg type="cobweb" bg={true}/>
                    </div>
                    )}
            </div>
        );
    }

}

export default App;
