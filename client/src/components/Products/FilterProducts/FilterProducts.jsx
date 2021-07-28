import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/categoriesActions";
import { filterModelsByCategory } from "../../../redux/actions/productActions";
import Typography from "@material-ui/core/Typography";

// * STYLES *
import {useStyles} from './FilterProductStyle';
import {useStylesDark} from './FilterProductStyleDark';

const FilterProducts = ({ setFilter, setCurrentPage }) => {
    //select color mode
    const dayMode = useStyles();
    const darkMode = useStylesDark();
    let classes;
    const actualColor = useSelector(state => state.color)
    console.log(actualColor)
    if(actualColor){
      classes = darkMode;
    } else {
      classes = dayMode;
    }
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(filterModelsByCategory(id));
    setFilter(false);
    setCurrentPage(0)
  };
  return (
    <Box>
      <Box component="button" onClick={() => setFilter(true)}>
        <Typography>Ver todos</Typography>
      </Box>
      <Box component="div">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              CATEGORIAS
            </ListSubheader>
          }
          className={classes.root}
        >
          {categories &&
            categories.map((categorie) => (
              <ListItem
                button
                id={categorie.id}
                key={categorie.id}
                onClick={() => handleClick(categorie.id)}
              >
                <ListItemText primary={categorie.name} />
              </ListItem>
            ))}
        </List>
      </Box>

      <Box></Box>
      <Box></Box>
    </Box>
  );
};

export default FilterProducts;
