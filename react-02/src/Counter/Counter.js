import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { incrAction, decrAction } from '../Redux/Counter/Counter.action'
const Counter = () => {

    let dispatch = useDispatch()
    let counter = useSelector((state) => {
        return state
    })
    let decrHandler = () => {
        dispatch(decrAction())
    }
    return (
        <div>
            <h1>Couunter Exmaple</h1>
            <pre>{JSON.stringify(counter)}</pre>
            <button onClick={() => {
                dispatch(incrAction())
            }}>INCR</button>
            {counter.counter}
            <button onClick={decrHandler}>DECR</button>
        </div>
    )
}

export default Counter