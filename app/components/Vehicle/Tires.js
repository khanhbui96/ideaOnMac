import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
 
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


export default function Tires(props) {
  const classes = useStyles();
  const { open, handleClickOpen, handleClose, updateData, updateVehicle } = props;
  const [id, setId] = React.useState('');
  const [tires, changeTire] = React.useState([...updateData.vehicle.equiments.tires]);
  const handleAdd = e => {
    changeTire([...tires, { id: id }]);
    setId('');
  };
  const handleDelete = value => {
    return () => {
      changeTire([
        ...tires.filter(tire => {
          return tire.id != value;
        })
      ]);
      
    };
  };
  const handleSave = ()=>{
    updateVehicle(
      updateData.vehicle._id,
      {
        ...updateData.vehicle,
        equiments: {
          ...updateData.vehicle.equiments,
          tires: tires
        }
      },
      ()=>{}
    )
  }
  const Tire = props => {
    const { value } = props;
    return (
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Mã số lốp"
          onChange={e => {}}
          value={value}
        />

        <Divider className={classes.divider} orientation="vertical" />

        <IconButton
          color="primary"
          className={classes.iconButton}
          onClick={handleDelete(value)}
          aria-label="directions"
        >
          <DeleteForeverIcon />
        </IconButton>
      </Paper>
    );
  };
  const showTires = tires => {
    return tires.map(tire => {
      return <Tire value={tire.id} />;
    });
  };
  return (
    <div>
         <Typography variant="h4"  style={{marginTop: 20}} >Trang bị lốp trên xe <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="directions"
                onClick={handleSave}
              >
                <SaveIcon />
              </IconButton></Typography>
            <div style={{marginTop: 20}}>{showTires(tires)}</div>
            <Paper component="form" className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="Mã số trên lốp"
                value={id}
                onChange={e => {
                  setId(e.target.value);
                }}
              />

              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                color="primary"
                className={classes.iconButton}
                onClick={handleAdd}
                aria-label="directions"
              >
                <AddIcon />
              </IconButton>
            </Paper>
            
    </div>
  );
}
