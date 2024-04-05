import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, reset, decrement } from '../redus/counterSlice'

const Counter = () => {
    // grabbing the state//
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
        <h1>Introduction To Redus</h1>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Counter