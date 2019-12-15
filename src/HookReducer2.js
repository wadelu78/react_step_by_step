import React, {useReducer} from 'react'
const initState = {
  count1: 0,
  count2: 0
}

//action is an object
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment1':
      return {
        //the old state
        ...state,
        //update count1 in the old state to count1+1
        //to create a new state, return this state
        count1: state.count1 + 1
      }
    case 'decrement1':
      return {
        ...state,
        count1: state.count1 - 1
      }
    case 'set1':
      return {
        ...state,
        count1: action.count
      }
      case 'increment2':
        return {
          ...state,
          count2: state.count2 + 1
        }
      case 'decrement2':
        return {
          ...state,
          count2: state.count2 - 1
        }
      case 'set2':
        return {
          ...state,
          count2: action.count
        }
      default:
        throw new Error('Unexpected action')
  }
}
const HookReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <React.Fragment>
      <div>
        <p>The state of count1 is {state.count1}</p>
        <button onClick={() => dispatch(
          //dispatch an object
          { type: 'increment1' }
        )}>+1</button>
        <button onClick={() => dispatch(
          { type: 'decrement1' }
        )}>-1</button>
        <button onClick={() => dispatch(
          //dispatch an object
          //with a key called count
          { type: 'set1', count: 0 }
        )}>Reset</button>
      </div>
      <div>
      <p>The state of count2 is {state.count2}</p>
        <button onClick={() => dispatch(
          { type: 'increment2' }
        )}>+1</button>
        <button onClick={() => dispatch(
          { type: 'decrement2' }
        )}>-1</button>
        <button onClick={() => dispatch(
          { type: 'set2', count: 0 }
        )}>Reset</button>
      </div>
    </React.Fragment>
  )
}

export default HookReducer2
