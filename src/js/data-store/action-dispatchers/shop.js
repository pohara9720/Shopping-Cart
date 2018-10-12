import {
    listItems,
    listCart,
    addToCart,
    removeItem,
} from '../action-creators/shop'
import {dataStore} from '../../index'


//NORMALLY THESE WOULD BE ASYNC API CALLS 


export const listAllItems = (dispatch) => {
    const products = [{
        name:'SledgeHammer',
        price:125.75
    },
    {
        name:'Axe',
        price:190.50
    },
    {
        name:'Bandsaw',
        price:562.13
    },
    {
        name:'Chisel',
        price:12.9
    },
    {
        name:'Hacksaw',
        price:18.45
    }]
    dispatch(listItems(products))
}

export const listCartItems = (dispatch) => {
    const cart = dataStore.getState().cart
    dispatch(listCart(cart))
}


export const deleteItem = (dispatch, name) => {
    const removed = dataStore.getState().cart.filter(x => x.name !== name)
    dispatch(removeItem(removed))
    listCartItems(dispatch)
}


export const addItemToCart = async (dispatch,object) => {
    const added = dataStore.getState().cart.concat(object)
    dispatch(addToCart(added))
}



