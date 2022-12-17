import { useState } from "react";

const initialState = {
	cart: [],
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

	return {
		state,
		addToCart
	}
}

export default useInitialState;