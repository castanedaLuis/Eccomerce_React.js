import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext.js'
import IconAddToCart from '@icons/bt_add_to_cart.svg';
import iconBtAddedCart from "@icons/bt_added_to_cart.svg"

const ProductItem = (props) => {
	const { product } = props;

	//Las importaciones
	const { addToCart, removeFromCart, state } = useContext(AppContext);

	// const handleClick = item => {
	// 	addToCart(item);
	// }

	//Funcion para agregar/eliminar al carrito
	const handleClick = (item) => {
		itsProductAdded() ? removeFromCart(item) : addToCart(item);
	};

	//Funcion para que busque en el contexto si existe el producto en el carrito 
	const itsProductAdded = () => state.cart.some((item) => item.id === product.id) ? true : false;

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className='icon' onClick={() => handleClick(product)} >
					{itsProductAdded() ? (
						<img src={iconBtAddedCart} alt="" />
					) : (
						<img src={IconAddToCart} alt="" />
					)}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;