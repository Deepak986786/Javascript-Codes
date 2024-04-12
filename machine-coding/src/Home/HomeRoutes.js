import React from 'react'
import HomeLayout from './HomeLayout';
import { Routes , Route } from 'react-router-dom'
import Home from './Home';

const HomeRoutes = () => {
  return (
    <HomeLayout>
        <Routes>
            <Route path="/home" component={Home}/>
        </Routes>
    </HomeLayout>
  )
}

export default HomeRoutes