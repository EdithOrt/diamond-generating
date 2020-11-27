import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import calendar from '../../Assets/images/calendar.png'
import clock from '../../Assets/images/reloj.png'
import box from '../../Assets/images/caja.png'
import { Box } from '@material-ui/core';

const tutorialSteps = [
  {
    label: 'Para  la Convocatoria. Requiere lanzar convocatoria con, por lo menos, 10 días hábiles de anticipación a la fecha en la que se celebre la Asamblea. ',
    imgPath: calendar
  },
  {
    label: 'Si no existiera quórum para una Asamblea  después de 1 hora a la acordada, la Asamblea se suspenderá 5 días Hábiles; para ser celebrada en esa misma hora y lugar. ',
    imgPath: clock
  },
  {
    label: 'Más información de los votos de asamblea ingrese aquí',
    imgPath: box
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 86,
    overflow: 'hidden',
    display: 'block',
  },
}));

const Stepper = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className={classes.root} >
      <Box style={{ height: '120px', display: 'flex', justifyContent: 'center' }}>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
      </Box>
      <Box style={{ height: '110px' }}>
        <Paper style={{ backgroundColor: 'transparent' }} square elevation={0} className={classes.header}>
          <Typography color='primary'>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
      </Box>
      <Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Siguiente
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Atrás
                    </Button>
          }
        />
      </Box>
    </div>
  );
}

export default Stepper;