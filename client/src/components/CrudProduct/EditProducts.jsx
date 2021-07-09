import React from "react";
import { Box, TextField, Button, Grid, Typography } from "@material-ui/core";
import somier from "../../assets/img/sommier.png";
import useStyles from "./styles";

const EditProducts = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      // justifyContent="center"
      alignItems="center"
      width={600}
      height={400}
      border={1}
      borderColor="primary.main"
    >
      <Box my={2}>
        <TextField placeholder="Search..." label="Search" variant="outlined" />
      </Box>
      <Box border={1} borderColor="secondary.main">
        <Grid container spacing={1}>
          <Grid item>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={100}
            >
              <Box width={150}>
                <img src={somier} alt="img not found" className={classes.img} />
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={100}
            >
              <Typography variant="subtitle1" color="initial">
                Colchon Baby Belmo
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={100}
            >
              <Button variant="contained" color="primary">
                info
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={100}
            >
              <Button variant="contained" color="primary">
                editar
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={100}
            >
              <Button variant="contained" color="secondary">
                eliminar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EditProducts;
