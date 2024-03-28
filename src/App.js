import './App.css';

import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

function App() {
    const[authenticate,setAuthenticate] = useState(false)//true면 로그인이 됨 false면 로그인이 안됨.

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ProductAll/>}/>
                <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
                <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
            </Routes>
        </div>
    );
}
export default App;