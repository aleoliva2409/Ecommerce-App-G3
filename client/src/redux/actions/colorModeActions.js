export const SET_COLOR = "SET_COLOR"

export const changeColor = (color) => (dispatch) => {
  dispatch({ type: SET_COLOR, payload: color })
};