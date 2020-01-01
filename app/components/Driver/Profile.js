import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CreateProfile from './CreateProfile';
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
    drivers, 
    addDriver, 
    deleteDriver, 
    selectDriver, 
    updateData, 
    updateDriver,
    errs,
    getErrs
  } = props.driverProps;
  function handleChange(event, newValue) {
    getErrs({})
    setValue(newValue);
  }

  return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label={<h4>Hồ sơ lí lịch lái xe</h4>} />
            <Tab label={<h4>Thêm lí Hồ sơ</h4>} />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}>
            <AllProfile
              drivers={drivers} 
              deleteDriver={deleteDriver} 
              setValue={setValue} 
              selectDriver={selectDriver}
            />
        </div>}
        {value === 1 && <div className={classes.page}>
          <CreateProfile
            errs={errs}
            getErrs={getErrs}
            addDriver={addDriver} 
            setValue={setValue} 
            updateData={updateData}
            selectDriver={selectDriver}
            updateDriver={updateDriver}
          />
          </div>}
        </div>
  );
}

export default Profile