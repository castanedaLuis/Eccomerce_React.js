import { useState } from "react";

const initialState = {
	cart: [],
	total:0
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload],
			total: state.total + payload.price
		});
	};
	const removeFromCart = (payload,indexValue) =>{
		//const newArray = state.cart.filter(product => product != payload);
		setState({
			...state,
			cart: state.cart.filter((items, index) => items.id !== payload && index !== indexValue),
			total: state.total - payload.price
		});
	}
	return {
		state,
		addToCart,
		removeFromCart,
	}
}

export default useInitialState;