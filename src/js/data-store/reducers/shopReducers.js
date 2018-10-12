import merge from 'deepmerge'
import {initialState} from '../reducers'

export const listItems = (state, { payload:  allItems }) => ({
        ...state,
        list: allItems,
})

export const listCart = (state, { payload:  allItems }) => ({
        ...state,
        cart: allItems,
})

export const removeItem = (state, {payload: removed}) =>
    ({
        ...state,
        cart: removed
    })

export const addToCart = (state, {payload: updateCart}) =>
    ({
        ...state,
        cart:updateCart
    })

