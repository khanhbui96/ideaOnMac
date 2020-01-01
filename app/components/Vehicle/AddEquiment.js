import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import Tires from './Tires'
import Batterys from './Batterys';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddEquiment(props) {
  const classes = useStyles();
  const { open, setOpen ,updateData, updateVehicle } = props;
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={()=>{setOpen(false)}}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
           
            <Typography variant="h6" className={classes.title}>
              Bổ sung thông tin
            </Typography>
            <Button autoFocus color="inherit" onClick={()=>{setOpen(false)}}>
              Xong
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item md={6} sm = {12}  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Tires 
                updateData={updateData} 
                updateVehicle={updateVehicle}
                />  
          </Grid>
          <Grid item md={6} sm = {12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Batterys 
            updateData={updateData} 
            updateVehicle={updateVehicle}
            />
          </Grid>
          </Grid>
      </Dialog>
    </div>
  );
}
