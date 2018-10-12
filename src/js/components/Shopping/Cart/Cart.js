//Dependencies
import React, {Component} from 'react'
import styles from './Cart.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {listCartItems,addItemToCart,deleteItem} from '../../../data-store/action-dispatchers/shop'
import groupArray from 'group-array'
//Assets

//NONE

//Components
import {Item} from '../AllItems/Item/Item'

const mapDispatchToProps = dispatch => ({
    removeCartItem:(name) => deleteItem(dispatch,name) ,
    listCart:() => listCartItems(dispatch)
})

const mapStateToProps = state => ({
    list: state.list,
    cart: state.cart
})


class Cart extends Component{
    constructor(props){
        super(props)
        this.state ={
            grouped:[]
        }
    }

    componentDidMount(){
        this.group(this.props.cart)
    }

    group = (array) => {
        const result = array.reduce(function (r, a) {
            r[a.name] = r[a.name] || [];
            r[a.name].push(a);
            return r;
        }, Object.create(null))
        this.setState({grouped:Object.entries(result)})
    }
    add = (a, b) =>  {
        return a + b
    }

    remove = (n) => {
        this.props.removeCartItem(n)
        const removed = this.state.grouped.filter(x => x[0] !== n)
        this.setState({grouped:removed})
    }
    
   render() {
    const prices = this.props.cart.map(x => x.price)
    const total = prices.reduce(this.add, 0)
    return (
        <div className={styles.container}>
            <div className='row'>
                <div className={styles.heading}>
                    <h1>Shopping Cart</h1>
                </div>
            </div>
            <div className='row'>
                <div className={styles.list}>
                    {   this.props.cart.length === 0 ?
                        <h1>There are no items</h1> 
                        :
                        this.state.grouped.map((p,i) => 

                            <Item 
                                key={i} 
                                button={() => this.remove(p[0])} 
                                add={false} 
                                name={`${p[0]} x ${p[1].length}`} 
                                price={p[1].length * p[1][0].price}
                            />
                                )
                    }
                </div>
                {
                    this.props.cart.length === 0 ? null :
                    <div className={styles.total}>
                        <label>Total</label>
                        <h1>{`$${total.toFixed(2)}`}</h1>
                    </div>
                }
            </div>
            <Link to='/' className={styles.productButton}>View Products</Link>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


