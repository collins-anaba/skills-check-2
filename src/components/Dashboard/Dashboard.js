import React, { Component } from 'react';
// import Product from "./components/Product/Product";
import axios from 'axios'; 

 class Dashboard extends Component {
    
    render () {
        return (
            <div>Dashboard {/* <Product/> */} 
            <img src={this.props.image_url} alt =''/>
            <p>{this.props.product_name}</p>
            <p>{this.props.price}</p>
            </div>
        )
    }
};

export default Dashboard;