import React, { useReducer } from 'react'

//use the same reducer twice

const initState = 0

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'set':
      return action.count
    default:
      throw new Error('Unexpected action')
  }
}

const HookReducer3 = () => {
  const [count1, dispatch1] = useReducer(reducer, initState)
  const [count2, dispatch2] = useReducer(reducer, initState)
  return (
    <React.Fragment>
      <div>
        <p>Count1 is {count1}</p>
        <button onClick={() => dispatch1(
          { type: 'increment' }
        )}>+1</button>
        <button onClick={() => dispatch1(
          { type: 'decrement' }
        )}>-1</button>
        <button onClick={() => dispatch1(
          { type: 'set', count: 0 }
        )}>Reset</button>
      </div>
      <div>
      <p>Count2 is {count2}</p>
        <button onClick={() => dispatch2(
          { type: 'increment' }
        )}>+1</button>
        <button onClick={() => dispatch2(
          { type: 'decrement' }
        )}>-1</button>
        <button onClick={() => dispatch2(
          { type: 'set', count: 0 }
        )}>Reset</button>
      </div>
    </React.Fragment>
  )
}

export default HookReducer3
