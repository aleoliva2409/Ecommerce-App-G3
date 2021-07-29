import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../redux/actions/categoriesActions';
import CategoryCard from '../CategoryCard/CategoryCard';
import { categoriesShow_Delete } from './ShowAndDeleteCategoriesStyle';

const useStyles = makeStyles(categoriesShow_Delete)

const ShowAndDeleteCategories = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const categoriesList = useSelector(state => state.categories.categories)
  const reloaded = useSelector(state => state.categories.reloaded)

  useEffect(() => {
      dispatch(getCategories())
  }, [dispatch, reloaded])

  return (
    <Container className={styles.categoriesContainer}>
      <Box component="div" className={styles.categoriesBox}>
        <Typography variant="h5"> Categorias: </Typography>
        <Box component="div" className={styles.categoriesCards}>
          {categoriesList.map((e)=>(
            <CategoryCard name={e.name} description={e.description} id={e.id} image={e.image} />
            ))}
        </Box>
      </Box>
    </Container>
  )
}

export default ShowAndDeleteCategories
