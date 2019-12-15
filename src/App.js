import React from 'react'
import HookState from './HookState'
import './App.css'
import HookReducer from './HookReducer'
import HookReducer2 from './HookReducer2'
import HookReducer3 from './HookReducer3'

const App = () => {
  return (
    <div className="App">
      <h1>React Step By Step</h1>
      <h3>useState hook</h3>
      <HookState />
      <br />
      <h3>useReducer hook</h3>
      <HookReducer />
      <br />
      <h3>useReducer hook, action is an object</h3>
      <HookReducer2 />
      <br />
      <h3>use a useReducer hook twice</h3>
      <HookReducer3 />
    </div>
  )
}

export default App
