import React from 'react'
import Counter from './Counter/Counter'
import Message from './Redux/Message/Message'
import { Provider } from 'react-redux'
import { store } from './Redux/Redux-2/Store'

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h1>App component</h1>
                <hr />
                <Message />
                <Counter />
            </Provider>
        </div>
    )
}

export default App
