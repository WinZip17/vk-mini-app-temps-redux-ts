import {
    createStore,
    applyMiddleware,
    Store as ReduxStore,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

export type Store = ReduxStore

const store: Store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;
