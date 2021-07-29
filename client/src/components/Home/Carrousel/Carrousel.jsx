import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import img1 from '../../../assets/img/Banner/desktop1-min.png';
import img2 from '../../../assets/img/Banner/desktop2-min.png';
import img3 from '../../../assets/img/Banner/desktop3-min.png';
import imgxs1 from '../../../assets/img/Banner/pillowtop mobile1-min.png';
import imgxs2 from '../../../assets/img/Banner/pillowtop mobile2-min.png';
import imgxs3 from '../../../assets/img/Banner/pillowtop mobile3-min.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  { imgPath: img1 },
  { imgPath: img2 },
  { imgPath:img3 },
];
const mobile = [
  { imgPath: imgxs1},
  { imgPath: imgxs2},
  { imgPath: imgxs3},
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    height: 'auto',
  },
  progress:{
    background: 'none',
    justifyContent:'center',

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: 550,
    maxWidth: "100%",
    overflow: 'hidden',
    width:'100%',
    objectFit: "cover"
  },
  styleArrows:{
    color:'transparent',
    background:'transparent',

  }
}));

function SwipeableTextMobileStepper() {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents

      >
    {(matches)?
          tutorialSteps.map((step, index) => (
            <div className={classes.carrousel} key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          )):
          mobile.map((step, index) => (
            <div className={classes.carrousel} key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))
      }
      </AutoPlaySwipeableViews>

        <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        className={classes.progress}

        // nextButton={
        //   <Button  size="small" onClick={handleNext}  className={classes.styleArrows} disabled={activeStep === 2}>
        //     {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        //   </Button>
        // }
        // backButton={
        //   <Button size="small" onClick={handleBack} className={classes.styleArrows} disabled={activeStep === 0}>
        //     {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}

        //   </Button>
        // }

      />

    </div>
  );
}

export default SwipeableTextMobileStepper;
