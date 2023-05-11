import { GM, GN } from './Redux/Redux-2/Message2/Message.action'
let intialState = {
    msg: "Hello"
}

let MessageReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GM':
            return { msg: "Good Morning! Rahul Gandhi" }
        case 'GN':
            return { msg: 'Good Night! Mr Rahul' }
        default:
            return state
    }
}
export { MessageReducer }
/*
what is reducer?
reducer is a pure function, it take two arg 1. state 2.action
*/