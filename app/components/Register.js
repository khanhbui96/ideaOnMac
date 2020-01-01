import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import  {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '40vw'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  textfield: {
    margin: 10,
    width: '100%'
  }
}));

export default function Register(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: '',
    login: '',
    password: '',
    password2: '',
    errs: {
      login: '',
      type: '',
      password: '',
      password2: ''
    }
  });
  const [values, setValues] = React.useState({
    showPassword: false,
    showPassword2: false,
  });
  const { errs, registerUser, history, getErrs } = props;
  const inputLabel = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    setState({
      ...state,
      errs: {
        ...errs
      }
    });
  }, [errs]);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const handleClick =  e => {
    e.preventDefault();
    if (!navigator.onLine) {
      setOpen(true);
    }else{
      registerUser({ ...state }, type => {
        if (type == 1) {
          history.push('/guest');
        } else {
          history.push('/host');
        }
      });
    }
    
  };
  const handleOnChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Paper className={classes.root}>
        <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        ><Typography variant="h3">Đăng nhập</Typography>
        <TextField
          className={classes.textfield}
          name="login"
          error={state.errs.login ? true : false}
          helperText={state.errs.login ? state.errs.login : ''}
          value={state.login}
          label="Tên đăng nhập"
          variant="outlined"
          onChange={handleOnChange}
        />
        <FormControl variant="outlined" className={classes.formControl}  error={state.errs.type ? true : false}>
          <InputLabel ref={inputLabel}>Phân loại</InputLabel>
          <Select
            native
            value={state.type}
           
            helperText={state.errs.type ? state.errs.type : ''}
            onChange={handleChange('type')}
            input={
              <OutlinedInput
                name="age"
                labelWidth={labelWidth}
                id="outlined-age-native-simple"
              />
            }
          >
            <option value="" />
            <option value={1}>Cơ quan, đơn vị</option>
            <option value={2}>Đơn vị Vận tải</option>
          </Select>
          {state.errs.type ? <FormHelperText id="standard-weight-helper-text">{state.errs.type}</FormHelperText> : ''}
        </FormControl>
        

        <FormControl error={state.errs.password ? true : false} className={clsx(classes.margin, classes.textField)} variant="outlined"  style={{width: '100%' ,marginBottom: 20}}>
          <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={state.password}
            name="password"
            onChange={handleOnChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {state.errs.password ? <FormHelperText id="standard-weight-helper-text">{state.errs.password}</FormHelperText> : ''}
          
        </FormControl>
        <FormControl error={state.errs.password2 ? true : false} className={clsx(classes.margin, classes.textField)} variant="outlined"  style={{width: '100%' ,marginBottom: 20}}>
          <InputLabel htmlFor="outlined-adornment-password">Xác nhận lại mật khẩu</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword2 ? 'text' : 'password'}
            value={state.password2}
            name="password2"
            onChange={handleOnChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {state.errs.password2 ? <FormHelperText id="standard-weight-helper-text">{state.errs.password2}</FormHelperText> : ''}
          
        </FormControl>




        <Button variant="outlined" onClick={handleClick}>
          Đăng kí
        </Button>
        <Typography style={{ marginTop: 8 }}>
          (Quay lại{ ' '}
          <Link
            to="/"
            style={{ color: 'blue' }}
            onClick={() => {
              getErrs({});
            }}
          >
            Đăng nhập
          </Link>{' '}
          ){' '}
        </Typography>
        </form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
            {'Phầm mềm yêu cầu Internet, kiểm tra lại đường truyền'}
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Đã rõ
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
}
