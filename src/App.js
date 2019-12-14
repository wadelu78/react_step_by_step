import React from 'react'
import HookState from './HookState'
import './App.css'
import HookReducer from './HookReducer'

const App = () => {
  return (
    <div className="App">
      <h1>React Step By Step</h1>
      <h3>useState hook</h3>
      <HookState />
      <br />
      <h3>useReducer hook</h3>
      <HookReducer />
    </div>
  )
}

export default App
