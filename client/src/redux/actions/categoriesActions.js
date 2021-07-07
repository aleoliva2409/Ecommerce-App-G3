import axios from 'axios';

export const ADD_CATEGORY = "ADD_CATEGORY";

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