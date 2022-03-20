import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Repositories from './Repositories';
import Home from './Home';

export default function RoutesPage() {
    return(
        <BrowserRouter>
            <Routes>
                
                <Route  path="/" exact element={<Home/>}/>
                <Route path='/repositories' element={<Repositories/>}/>
            </Routes>
        </BrowserRouter>
    )
}