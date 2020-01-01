import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllLevel from './AllLevel';
import FilterLevel from './FilterLevel';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}));

const Level = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {drivers} = props.vehicleProps;
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label={<h5>Tra cứu bậc thợ</h5>} />
            <Tab label={<h5>Thi nâng bậc trong năm </h5>} />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}><AllLevel drivers={drivers}/></div>}
        {value === 1 && <div className={classes.page}><FilterLevel  drivers={drivers}/></div>}
        </div>
  );
}

export default Level