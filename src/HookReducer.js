import React, { useReducer }from 'react'
const initState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return 0
    default:
      throw new Error('Unexpected action')
  }
}

const HookReducer = () => {
  const [count, dispatch] = useReducer(reducer,initState)
  return (
    <div>
      <p>The count number is {count}</p>
      <button onClick={() => dispatch('increment')}>+1</button>
      <button onClick={() => dispatch('decrement')}>-1</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}

export default HookReducer
