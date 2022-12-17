import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext.js'
import IconAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = (props) => {
	const {product} = props;

	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className='icon' onClick={() => handleClick(product)} >
					<img src={IconAddToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;