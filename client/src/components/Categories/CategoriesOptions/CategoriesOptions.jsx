import React from 'react';
import AddCategory from '../AddCategories/AddCategories';
import ShowAndDeleteCategories from '../ShowAndDeleteCategories/ShowAndDeleteCategories';
import useStyles from "./CategoriesOptionsStyles";  // styles file already import

const CategoriesOptions = () => {
    const classes = useStyles();
    return (
        <div>
            <AddCategory/>
            <ShowAndDeleteCategories/>
        </div>
    )
}

export default CategoriesOptions
