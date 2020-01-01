import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CreateCommand from './CreateCommand'
import AllCommand from './AllCommand';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}));

const Command = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {addCommand, commands, selectCommand, chooseCommand, getAllCommand} = props.commandProps;
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label={<h4>Lệnh vận chuyển </h4>} />
            <Tab label={<h4>Danh sách lệnh vận chuyển</h4>} />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}>
            <CreateCommand 
              addCommand={addCommand}
              chooseCommand={chooseCommand}
              setValue={setValue}
              selectCommand={selectCommand}
             />
          </div>}
        {value === 1 && <div className={classes.page}>
          <AllCommand 
            commands = {commands}
            getAllCommand = {getAllCommand}
            selectCommand={selectCommand}
            setValue={setValue}
            />
        </div>}
        </div>
  );
}

export default Command