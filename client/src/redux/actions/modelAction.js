import axios from "axios";

export const GET_ALL_MODELS = "GET_ALL_MODELS";

export const getModels = () => async (dispatch) => {
  try{
    const { data } = await axios.get('/models/all');
    dispatch({
      type: GET_ALL_MODELS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

