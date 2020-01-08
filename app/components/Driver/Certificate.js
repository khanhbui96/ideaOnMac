import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AllCertificate from './AllCertificate';
import FilterCertificate from './FilterCertificate';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}));

const Certificate = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {drivers} = props.certificateProps;
 
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label={<h4>Quản lí giấy phép lái xe</h4>} />
            <Tab label={<h4>Giấy phép lái xe cần đổi</h4>} />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}  >
          <AllCertificate drivers={drivers}/>
          </div>}
        {value === 1 && <div className={classes.page}><FilterCertificate drivers={drivers}/></div>}
        </div>
  );
}

export default Certificate