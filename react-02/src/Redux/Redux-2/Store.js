import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore } from 'redux'
import { MessageReducer } from './Redux/Redux-2/Message2/Message.reducer'
import { CounterReducer } from './Redux/Counter/Counter.reducer'
let store = createStore(MessageReducer, composeWithDevTools())


export { store }