import React from 'react';
import ProductList from './components/Product/ProductList'
import ProductDetails from './components/Product/productDetails'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App =()=> {

const [userList, setUserList] = useState([])


const addUser = (userData) =>{
  setUserList([...userList,userData]);
}

useEffect(()=>{
  return () =>{

  }
},[userList]);


  return (
   <Router>
     <Navbar />
     <Switch>
        <Route path="/">
          <ProductList userList={userList} />
        </Route>

        <Route path="/prodcut-details/:id">
          <ProductDetails />
        </Route>

        <Route path="/addproduct"></Route>
        <Route path="*"><h1>404</h1></Route>
     </Switch>

     <Footer />
   </Router>
  );
}

export default App;
