import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { rootReduser } from './reduser/index'

export const store = createStore(rootReduser, applyMiddleware(thunk))
