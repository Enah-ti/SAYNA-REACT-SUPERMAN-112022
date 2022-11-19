import '../style/app.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../page/Home';
import Layout from '../page/Layout';
import Game from '../page/Game';
import MonCompte from '../page/MonCompte';
import Eshop from '../page/Eshop';
import { PageNotFound } from '../page/PageNotFound';
import { Product } from './product';
import  Cart  from './Cart';
function App() {
    return ( 
         <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}> 
                        <Route index element={<Home/>} />
                        <Route path='home' element={<Home/>} />
                        <Route path='game' element={<Game/>} />
                        <Route path='eshop' element={<Eshop/>} />
                        <Route path='MonCompte' element={<MonCompte/>} />
                        <Route path='Eshop/:id' element={<Product/>} />
                        <Route path='cart' element={<Cart/>} />
                        <Route path='*' element={<PageNotFound/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;