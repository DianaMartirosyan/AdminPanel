import {React, Component} from 'react';
import TopBar from './components/topBar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import styles from './styles/App.module.css';
import Home from '../src/pages/home/Home';
import User from '../src/pages/user/User';
import NewUser from './pages/newUser/NewUser';
import UserList from './pages/userlist/UserList';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

import {BrowserRouter as Router,   Routes,   Route } from "react-router-dom";




function App() {
  return (

    <Router>
         <TopBar/> 
          
                  <div className = {styles.container}>
                      <Sidebar/> 
                          <Routes> 
                              <Route exact path="/" element={<Home />} /> 
                              <Route path="/users" element={<UserList />} /> 
                              <Route path="/user/:userId" element={<User />} /> 
                              <Route path="/newUser/" element={<NewUser />} /> 
                              <Route path="/products/" element={<ProductList/>} />
                              <Route path="/products/:productId" element={<Product/>} /> 
                              <Route path="/newProduct" element={<NewProduct/>} />  

                            </Routes>
                        
                    </div>
     </Router>
            
    
  );
}

export default App;
