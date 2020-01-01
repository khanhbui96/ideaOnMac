import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RegularVehicles from './RegularVehicles';
import InforVerify from './InforVerify';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}));

const Verify = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {vehicles, selectVehicle, updateData, updateVehicle, commands, getAllCommand} = props.vehicleProps;
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label={<h4> Phương tiện vận tải TX</h4>} />
            <Tab label={<h4>Kiểm định phương tiện</h4>} />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}>
        <RegularVehicles
          vehicles={vehicles} 
          setValue={setValue} 
          selectVehicle={selectVehicle}
          commands={commands}
          getAllCommand={getAllCommand}
          />
          </div>}
        {value === 1 && <div className={classes.page}>
          <InforVerify
            vehicles={vehicles}
            selectVehicle={selectVehicle}
            updateVehicle={updateVehicle}
            updateData={updateData} 
          />
        </div>}
        </div>
  );
}

export default Verify