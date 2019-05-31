import React, { Component } from 'react';
import axios from 'axios'; 

export default class Form extends Component {
    constructor (){
        super();
        this.state = {
            image_url: '',
            product_name:'',
            price: ''
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e){
    };

    

    render () {
        return (
            <div>Form
            <h3>Image URL:</h3>
            <input value= {this.state.image_url} onChange={this.handleInput}></input>
            <br/>
            <h3>Product Name:</h3>
            <input value= {this.state.product_name} onChange={this.handleInput}></input>
            <br/>
            <h3>Price:</h3>
            <input value = {this.state.price} onChange={this.handleInput}></input>
            <br/>
            <button onClick={e => {this.setState ({
                image_url:'',
                product_name: '',
                price: ''
            })
            }}>Cancel</button>
            <br/>
            {this.props.edit === false ? (
                <button onClick={this.handlePost}>Add to Inventory</button>
            ) : (
                <button>Add to Inventory</button>
            )}

            </div>

        )
    }
};