//Dependencies
import React, {Component} from 'react'
import styles from './AllItems.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {listAllItems,addItemToCart,deleteItem} from '../../../data-store/action-dispatchers/shop'
//Assets

//NONE

//Components
import {Item} from './Item/Item'

const mapDispatchToProps = dispatch => ({
    loadItems : () => listAllItems(dispatch),
    addCartItem: (object) => addItemToCart(dispatch,object),
})

const mapStateToProps = state => ({
    list: state.list,
    cart: state.cart
})


class AllItems extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }

    componentDidMount(){
        this.props.loadItems()
    }

    add = (o) => {
        console.log(o)
        this.props.addCartItem(o)
    }

    render() {
    
   
    return (
        <div className={styles.container}>
            <div className='row'>
                <div className={styles.heading}>
                    <h1>Available Products</h1>
                </div>
            </div>
            <div className='row'>
                <div className={styles.list}>
                    {
                        this.props.list.map((p,i) => 
                            <Item
                                key={i} 
                                add={true} 
                                name={p.name} 
                                price={p.price} 
                                button={() => this.add(p)}/>)
                    }
                </div>
            </div>
            <Link to='/cart' className={styles.cartButton}>{this.props.cart.length === 0 ? 'View Cart' : `View Cart (${this.props.cart.length})`}</Link>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllItems)


