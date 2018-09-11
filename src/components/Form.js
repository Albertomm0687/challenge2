import React, { Component } from 'react';

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            bandName: '',
            gender: '',
            description: '',
            image:'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const{value, name} = e.target;
        this.setState({
            [name]:value
        })             
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state)
        console.log(this.state);        
        console.log("sending data");
        
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                        type="text"
                        name="bandName"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Band Name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="gender"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Gender(s)"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="description"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select
                        name="image"
                        className="form-control"
                        onChange={this.handleInput}>
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Save
                    </button>                
                </form>
            </div>
        )
    }
}

