import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FormControl, NativeSelect, } from '@material-ui/core'
import Object from './Object';
import TypeCar from './TypeCar';
import PassAbility from './PassAbility';
import Volume from './Volume';
import AmountPeople from './AmountPeople';
import Result from './Result';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
function getSteps() {
  return ['Lựa chọn xe theo đối tượng vận chuyển',
   'Lựa chon xe theo nhiêu liệu sử dụng',
    'Lựa chọn xe theo khả năng thông qua',
     'Lựa chọn xe theo khối lượng cần vận chuyển',
    'Lựa chọn xe theo số người cần vận chuyển'];
}



export default function SelectCar(props) {
  const classes = useStyles();
  const {
    setAmountPeople,
    setObject,
    setPassAbility,
    setVolume,
    setTypeFuel,
    choose,
    vehicles
  } = props.selectCarProps
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const [value, setValue] = React.useState('')
  const steps = getSteps();
  const [state, setState] = React.useState({
    age: ''
  });
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Object setObject = {setObject}/>
      case 1:
        return <TypeCar setTypeFuel={setTypeFuel}/>;
      case 2:
        return <PassAbility setPassAbility={setPassAbility}/>;
      case 3:
          return <Volume setVolume={setVolume}/>;
      case 4:
          return <AmountPeople setAmountPeople={setAmountPeople}/>
      default:
        return 'Unknown step';
    }
  }
  function totalSteps() {
    return getSteps().length;
  }

  function isStepOptional(step) {
    return step === 1;
  }

  function handleSkip() {
    
        if(activeStep == 0){setObject('Đã bỏ qua')}
        if(activeStep == 1){setTypeFuel('Đã bỏ qua')}
        if(activeStep == 2){setPassAbility('Đã bỏ qua')}
        if(activeStep == 3){setVolume('Đã bỏ qua')}
        if(activeStep == 4){setAmountPeople('Đã bỏ qua')}
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function skippedSteps() {
    return skipped.size;
  }

  function completedSteps() {
    return completed.size;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps() - skippedSteps();
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function handleNext() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  function handleComplete() {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  }

  function handleReset() {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function isStepComplete(step) {
    return completed.has(step);
  }
  
  return (
    <div className={classes.root} >
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div >
        {allStepsCompleted() ? (
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div><Result choose={choose} vehicles={vehicles}/></div>
            <div style={{margin: 20}}><Button 
              variant="contained"
              color="primary" 
              onClick={handleReset}>Bắt đầu lại</Button></div>
            </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Quay lại
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Bước tiếp theo
              </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Bỏ qua bước này
                </Button>

              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant="caption" className={classes.completed}>
                    Bước  {activeStep + 1} đã hoàn thành xong
                  </Typography>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Kết thúc' : 'Hoàn thành xong'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}