import {
  ITEMS_LIST_ITEMS,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_LIST_ITEMS
} from '../action-types'

export const listItems = (allItems) => ({
    type: ITEMS_LIST_ITEMS,
    payload: allItems

})

export const listCart = (allItems) => ({
    type: CART_LIST_ITEMS,
    payload: allItems

})

export const addToCart = (updateCart) => ({
    type: CART_ADD_ITEM,
    payload:updateCart
})

export const removeItem = (removed) => ({
    type: CART_REMOVE_ITEM,
    payload: removed
})


