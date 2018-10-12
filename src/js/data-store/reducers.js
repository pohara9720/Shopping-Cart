import {
    listItems,
    addToCart,
    removeItem,
    listCart
} from './reducers/shopReducers.js'

import createReducer from './../utils/createReducer.js'

import {
  ITEMS_LIST_ITEMS,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_LIST_ITEMS
} from './action-types'

export const initialState = {
    list:[],
    cart:[]
}

export default createReducer(initialState, {
    [ITEMS_LIST_ITEMS]: listItems,
    [CART_ADD_ITEM]: addToCart,
    [CART_REMOVE_ITEM]: removeItem,
    [CART_LIST_ITEMS]:listCart
})
