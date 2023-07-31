import React from 'react'
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import FrontePage from './First/FrontePage'
import Profile from './Second/Profile';
import Gallery from './Second/Gallery';
import Post from './Second/Post';
import Todo from './Second/Todo';
import Sidebar from './Second/Sidebar';


function App() {
    return (
        <div>
            <header >
                <Routes>
                    <Route path='/' element={<FrontePage />}></Route>

                    <Route path='/profile' element={<Profile />}></Route>
                    <Route path='/gallery' element={<Gallery />}></Route>
                    <Route path='/post' element={<Post />}></Route>
                    <Route path='/todo' element={<Todo />}></Route>
                    <Route path='/sidebar' element={<Sidebar />}></Route>
                </Routes>
            </header>
        </div>
    )
}

export default App