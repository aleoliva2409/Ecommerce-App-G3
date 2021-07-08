import axios from 'axios';

export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const createCategory = (newCategory) => async (dispatch) => {
	try {
        const {data} = await axios.post('/categories/add', newCategory)
       dispatch({
           type: ADD_CATEGORY,
           payload: data
       })
    } catch (error){
        console.log(error)
    }
};

export const getCategories = () => async (dispatch) => {
    try {
        const {data} = await axios.get('/categories/')
        dispatch({
            type: GET_CATEGORIES,
            payload: data
        })
    } catch (error){
        console.log(error)
    }
}

export const delCategory = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`/categories/delete/${id}`)
        console.log(data)
        dispatch({
            type: DELETE_CATEGORY,
            payload: data
        })
    } catch (error){
        console.log(error)
    }
}