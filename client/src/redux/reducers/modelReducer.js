import { GET_ALL_MODELS } from "../actions/modelAction";

const initialState = {
  modelList: []
}

const modelReducer = (state=initialState, action) => {
  switch (action.type){
    case GET_ALL_MODELS:
      return {...state, modelList: action.payload} //* all model list
    default:
      return state;
  }
}
export default modelReducer;
