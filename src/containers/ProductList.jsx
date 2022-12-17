import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';


const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = useState([]);

    async function getData(){
        const response = await fetch(API)
        const data = await response.json()
		setProducts(data);
    }

	useEffect( () => {
        getData()
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;