import React, {Component} from 'react'
import styles from './Item.css'
// import {listAllItems,addItemToCart,deleteItem} from '../../../data-store/action-dispatchers/shop'

export const Item = (props) => (
	<div className={styles.container}>
		<div className={styles.info}>
			<h3>{props.name}</h3>
			<label>{`$${props.price.toFixed(2)}`}</label>
		</div>
		<div className={styles.button}>
			<button onClick={props.button}>{props.add === true ? '+ Add to cart' : '- Remove from cart'}</button>
		</div>
	</div>
	) 