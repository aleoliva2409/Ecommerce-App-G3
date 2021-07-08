import axios from 'axios';

export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const ACTIVE_LOADING = "ACTIVE_LOADING";

export const getProductDetails = (id) => async (dispatch) => {
	try {
        const {data} = await axios.get(`/products/${id}`);
        console.log(data);
        dispatch({
          type: GET_PRODUCT_DETAILS,
          product: await data,
         })
  }catch(error){
    console.log(error)
  }
};

export const activeLoading = (dispatch) => {
  return({
    type: ACTIVE_LOADING,
    isLoading: true,
  })
}
