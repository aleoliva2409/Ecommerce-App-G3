import { SET_COLOR } from "../actions/colorModeActions";

const initialState = JSON.parse(localStorage.getItem('color'))

const colorReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_COLOR:
			return state = action.payload
		default:
			return state;
	}
};

export default colorReducer;