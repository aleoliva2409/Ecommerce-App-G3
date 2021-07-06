
import styleProductCss from './Product.module.css';
import { Grid, Select, makeStyles, InputLabel, Container, Typography } from '@material-ui/core';
import { styleTypo } from './prueba.js';

const useStyles = makeStyles(styleTypo);

function makeReviews(){
  let reviews = [];
  for(let i=0; i<5; i++){
    reviews.push({
      author: `Author${i}`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus consectetur ex laborum dolore temporibus nostrum eligendi quidem iusto hic.'
    })
  }
  return reviews;
}

function Product (){

  const classes = useStyles();

  const colors = [{backgroundColor: 'black'}, {backgroundColor: 'white'}]

  const sizes = ["97X65","100X50","120X60","130X60","135X65","140X80"];

  return <Grid
    className={classes.root}
    container
    direction="column"
    justify="space-around"
    alignItems="center"
  >
    <figure className={styleProductCss.imageContainer}>
      <img src="https://www.pillowtop.com.ar/wp-content/uploads/BabyBelmo-scaled.jpg" alt="Colchon Baby Belmo"/>
        <figcaption>
          <span className={styleProductCss.price}>$2500</span>
          <span className={styleProductCss.stock}>Available</span>
        </figcaption>
    </figure>
    <Typography className={classes.root} variant="h3" align="center" p="2rem">Colchón Baby Belmo</Typography>
    <div id={styleProductCss.colorPicker}>
      <label htmlFor="color1">
        <input type="radio" id="color1" className={styleProductCss.checkboxClass} name="colorPicker"></input>
        <span className={styleProductCss.colorContainer}><div style={colors[0]}></div></span>
      </label>
      <label htmlFor="color2">
        <input type="radio" id="color2" className={styleProductCss.checkboxClass} name="colorPicker"></input>
        <span className={styleProductCss.colorContainer}><div style={colors[1]}></div></span>
      </label>
    </div>
    <InputLabel
      htmlFor="size"
    >Size</InputLabel>
    <Select
      native
      inputProps={{
        name: 'size',
        id: 'size',
      }}
    >
      {sizes.map(el=><option value={el}>{el}</option> )}
    </Select>
    <Container className={classes.container} id={styleProductCss.description}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officia odit beatae, corrupti sed voluptatem magnam autem, repellat commodi mollitia ipsam modi. Facilis dolores delectus nesciunt saepe odio tempora facere.
      {console.log(classes.styleContainer)}
    </Container>
    <Container maxWidth="md" id={styleProductCss.reviews}>
      <Typography
        variant="h5"
        align="left"
        p="2rem"
      >
        Reviews
      </Typography>
      {makeReviews().map(el=>{
        return <fieldset className={styleProductCss.reviews}>
          <legend>
            <Typography
              variant="h6"
            >
              {el.author}
            </Typography>
          </legend>
          <Typography
            paragraph={true}
          >
            {el.description}
          </Typography>
        </fieldset>
      })}
    </Container>
  </Grid>
}

export default Product;
