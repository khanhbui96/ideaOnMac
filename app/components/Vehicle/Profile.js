import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CreateProfile from './CreateProfile'
import AllProfile from './AllProfile';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}));

const Profile = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {
    vehicles,
    addVehicle, 
    deleteVehicle, 
    selectVehicle, 
    updateData, 
    updateVehicle, 
    errs, 
    getErrs,
    getAll,
  } = props.vehicleProps;
  function handleChange(event, newValue) {
    getErrs({});
    setValue(newValue);
  }
  return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label={<h4>Lí lịch phương tiện</h4>} />
            <Tab label={<h4>Lí lịch phương tiện</h4>} />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}>
          <AllProfile 
            vehicles={vehicles}
            deleteVehicle={deleteVehicle} 
            setValue={setValue} 
            selectVehicle={selectVehicle}
            />
          </div>}
        {value === 1 && <div className={classes.page}>
          <CreateProfile 
            addVehicle={addVehicle}
            errs = {errs}
            getErrs={getErrs} 
            setValue={setValue} 
            updateData={updateData}
            selectVehicle={selectVehicle}
            updateVehicle={updateVehicle}
            /></div>}
        </div>
  );
}

export default Profile