import React from 'react'
// import './App.css'
import { Routes, Route } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import FrontePage from './First/FrontePage'
import Profile from './Second/Profile';
import Sidebar from './Second/Sidebar';
import Gallery from './Second/Gallery';
import Post from './Second/Post';
import Todo from './Second/Todo';


function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Routes>
                    <Route path='/' element={<FrontePage />}></Route>
                    <Route path='/sidebar' element={<Sidebar />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                    <Route path='/gallery' element={<Gallery />}></Route>
                    <Route path='/post' element={<Post />}></Route>
                    <Route path='/todo' element={<Todo />}></Route>
                </Routes>
            </header>
        </div>
    )
}

export default App