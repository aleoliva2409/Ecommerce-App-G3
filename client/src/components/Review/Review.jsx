import React,{ useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import { Button, FormControl,FormLabel } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// * STYLES *
import { useStyles } from './ReviewStyle';

function Review() {
  const classes = useStyles();

  const [valuesForm,SetValuesForm] = useState({
    rating: '',
    textarea: '',
    submitted: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValuesForm({ ...valuesForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetValuesForm({submitted: true });
    const { rating, textarea } = valuesForm;
    //setSize(e.target.value);
    // console.log("rating " + rating);
    // console.log("texarea " + textarea);
  //   if (rating && textarea ) {
  //     dispatch(login({2, textarea,rating}));
  // }

  };
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
        <FormLabel>Tu puntuación :</FormLabel>
          <Rating
            name="rating"
            value={valuesForm.rating}
            onChange={handleChange}
          />
          <TextareaAutosize
            rows={10}
            className={classes.textarea}
            name='textarea'
            value={valuesForm.textarea}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" disableElevation type="submit">
            Enviar
          </Button>
        </FormControl>
        </form>

    </div>
  )
}

export default Review

