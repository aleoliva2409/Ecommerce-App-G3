import axios from "axios";

export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ACTIVE_LOADING = "ACTIVE_LOADING";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const GET_PRODUCT_UPDATE = "GET_PRODUCT_UPDATE";
export const FILTER_PRODUCT_CATEGORY = "FILTER_PRODUCT_CATEGORY";


// * Set data of each product

// export const getSearchProducts = (name) => async (dispatch) => {
//   console.log(name)
//   try {
//     const { data } = await axios.get(`/products?name=${name}`);
//     dispatch({
//       type: SEARCH_PRODUCTS,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getSearchModels = (name) => async (dispatch) => {
  console.log(name)
  try {
    const { data } = await axios.get(`/models?name=${name}`);
    dispatch({
      type: SEARCH_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getProductDetails = (id,update = false) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/products/${id}`);
//     if(update) {
//       dispatch({
//         type: GET_PRODUCT_UPDATE,
//         payload: data
//       })
//     } else {
//       dispatch({
//         type: GET_PRODUCT_DETAILS,
//         payload: data,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getModelDetails = (id,update = false) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/models/${id}`);
    if(update) {
      dispatch({
        type: GET_PRODUCT_UPDATE,
        payload: data
      })
    } else {
      dispatch({
        type: GET_PRODUCT_DETAILS,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


// export const getModels = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/products/all`);
//     dispatch({
//       type: GET_PRODUCTS,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getModels = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/models/all`);
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};


// * SetLoading on true to display the loading component

export const activeLoading = () => {
  return {
    type: ACTIVE_LOADING,
    payload: true,
  };
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/products/${id}`)
    dispatch({
      type: DELETE_PRODUCT,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}

export const addProduct = (product) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/products` , product)

    dispatch({
      type: ADD_PRODUCT,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/products/${id}`, product)

    dispatch({
      type: UPDATE_PRODUCT,
      payload: data
    })

  } catch (error) {

  }
}

// export const filterProductCategory = (id) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/products/category/${id}`)
//     dispatch({
//       type: FILTER_PRODUCT_CATEGORY,
//       payload: data
//     })
//   } catch (error) {
//   }
// }

export const filterModelsByCategory = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/models/category/${id}`)
    dispatch({
      type: FILTER_PRODUCT_CATEGORY,
      payload: data
    })
  } catch (error) {
  }
}
