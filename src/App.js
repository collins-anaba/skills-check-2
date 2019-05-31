import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

import axios from 'axios'


import './App.css';



class App extends Component {
  constructor(){
    super();
      this.state = {
        products: [],
        edit: false
      }
  }

  componentDidMount() {
    axios.get('/api/products')
    .then(response => { this.setState({ products: response.data })
    })
    .catch(error => console.log(error))
  }

  handleEdit(){
    this.setState({
      edit: true
    })
  }

  
  render (){
    
  return (
    <div>
        <Dashboard/>
        <Form/>
        <Header/>
        <Product/>
    </div>
  )
}
};

export default App;
