import { ADD_CATEGORY, GET_CATEGORIES, DELETE_CATEGORY } from "../actions/categoriesActions";

const initialState = {
	message: '',
	categories:[],
	reloaded: false
};

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY:
			return {
				...state,
				message: action.payload,
				reloaded: true
			};

			case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
				reloaded: false
			};

			case DELETE_CATEGORY:
			return {
				...state,
				message: action.payload,
				reloaded: true
			};

		default:
			return state;
	}
};

export default categoriesReducer;
