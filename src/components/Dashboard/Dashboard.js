import React, { Component } from 'react';
// import Product from "./components/Product/Product";
import axios from 'axios'; 

 class Dashboard extends Component {
    
    render () {
        return (
            <div>Dashboard 
            <img src={this.props.image_url} alt =''/>
            <p>{this.props.product_name}</p>
            <p>{this.props.price}</p>
            <button onClick={props.delete}>Delete</button>
            <button onClick={props.edit}>Edit</button>
            </div>
        )
    }
};

export default Dashboard;