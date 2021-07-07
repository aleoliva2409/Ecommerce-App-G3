import { ADD_CATEGORY } from "../actions/categoriesActions";

const initialState = {
	message: ''
};

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY:
			return {
				...state,
				message: action.payload,
			};

		default:
			return state;
	}
};

export default categoriesReducer;
