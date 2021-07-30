import React,{ useState, useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import { useDispatch } from 'react-redux';
import { Button, FormControl,FormLabel ,Box} from '@material-ui/core';
import {postReview} from '../../redux/actions/ReviewActions';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useToken } from '../../hooks/useToken';

// * STYLES *
import { useStyles } from './ReviewStyle';

function Review() {

  const { id,isadmin } = useToken()
  // console.log("idUser " + id);
  // console.log("isadmin " + isadmin);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [valuesForm,SetValuesForm] = useState({
    score: '',
    text: '',
    submitted: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetValuesForm({ ...valuesForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetValuesForm({submitted: true });
    const { score, text } = valuesForm;
    // console.log("score " + score);
    // console.log("texarea " + text);
    if (score && text ) {
      const idUser = id;
      dispatch(postReview(2,{idUser,text,score}));

  }

  };
  return (
    <Box component='div' display={isadmin===false ? 'block' : 'none'}>
       <form onSubmit={handleSubmit} >
        <FormControl className={classes.formControl}>
            <Box className={classes.review1}>
            <FormLabel className={classes.labbel}>Tu puntuación :</FormLabel>
                <Rating
                  name="score"
                  value={valuesForm.score}
                  onChange={handleChange}
                  className={classes.stars}
                />
            </Box>
            <TextareaAutosize
              rows={10}
              className={classes.text}
              name='text'
              value={valuesForm.text}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" disableElevation type="submit" className={classes.button1}>
              Enviar
            </Button>
        </FormControl>
        </form>

    </Box>
  )
}

export default Review

