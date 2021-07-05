import { PRUEBA_ACTION } from "../actions/pruebaAction";

// reducer
const initialState = {
	pruebas: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case PRUEBA_ACTION:
			return {
				...state,
				pruebas: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
