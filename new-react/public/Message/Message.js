import React from 'react'
import { gmAction, gnAction } from './redux/Message/message.action'
import { useDispatch, useSelector } from 'react-redux'
const Message = () => {
    let dispatch = useDispatch();
    let msg = useSelector((state) => {
        return state.msg
    })

    let gmHandler = () => {
        console.log("first-view to action")
        dispatch(gmAction())
    }
    let gnHandler = () => {

        dispatch(gnAction())
    }
    return (
        <div>
            <pre>{JSON.stringify(msg)}</pre>
            <h1>Message:{msg}</h1>
            <button on Click={gmHandler}>gm</button>
            <button onClick={gnHandler}>gn</button>
        </div>
    )
}
export default Message