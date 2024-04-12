import React from 'react'
import ProblemsLayout from './problemsLayout'
import { Route, Routes } from 'react-router-dom'
import ProblemHome from './ProblemHome'

const ProblemRoutes = () => {
  return (
    <ProblemsLayout>
        <Routes>
            <Route path="/problems" component={ProblemHome}/>
        </Routes>
    </ProblemsLayout>
  )
}

export default ProblemRoutes