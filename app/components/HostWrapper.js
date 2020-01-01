import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { DirectionsCar } from '@material-ui/icons';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Link, withRouter } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import {getErrs} from '../actions/erros.actions'

const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: 3
  }
}));

function Wrapper({ history, children, getErrs, user }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [topic, changeTopic] = React.useState('Phần mềm quản lí vận tải');
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            {topic}
          </Typography>
          
            
          <div style={{ position: 'absolute', right: 20, top: 10 }}>
            <div>
          <Typography variant="h6" noWrap style={{float: 'left', marginTop: 7}}>
            <div>Chào! {' '}{user.name}</div>
          </Typography>
            <IconButton
              color="inherit"
              title="Đăng xuất"
              onClick={() => {
                localStorage.removeItem('jwt');
                getErrs({});
                history.push('/');
              }}
            >
              <ExitToAppIcon />
            </IconButton>
          </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <h1 style={{marginRight: 30}}>Chức năng</h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List>
          <List
            onClick={() => {
              setOpen(true);
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <DirectionsCar />
              </ListItemIcon>
              <ListItemText
                onClick={e => {
                  changeTopic(e.target.innerText);
                }}
                primary="Quản lí phương tiện vận chuyển"
              />
            </ListItem>
          </List>
          <Collapse in={open} timeout="auto">
            <Link to="/host/vehical/profile">
              <ListItem button style={{ paddingLeft: 76 }}>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Lí lịch phương tiện"
                />
              </ListItem>
            </Link>
            <Link to="/host/vehical/equiment">
              <ListItem button style={{ paddingLeft: 76 }}>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Trang thiết bị phương tiện"
                />
              </ListItem>
            </Link></Collapse>
          <List onClick={() => setOpen(true)}>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText
                onClick={e => {
                  changeTopic(e.target.innerText);
                }}
                primary="Quản lí lái xe thợ sữa chữa"
              />
            </ListItem>
          </List>
          <Collapse in={open} timeout="auto">
            <Link to="/host/driver/profile">
              <ListItem button style={{ paddingLeft: 76 }}>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Lí lịch lái xe"
                />
              </ListItem>
            </Link>
            <Link to="/host/driver/certificate">
              <ListItem button style={{ paddingLeft: 76 }}>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Giấy phép lái xe"
                />
              </ListItem>
            </Link>
            <Link to="/host/driver/level">
              <ListItem button style={{ paddingLeft: 76 }}>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Bậc thợ"
                />
              </ListItem>
            </Link>
          </Collapse>
          <List onClick={() => setOpen(true)}>
              <ListItem button>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Vận tải thường xuyên"
                />
              </ListItem>
          </List>
          <Collapse in={open} timeout="auto">
             <Link to="/host/vehical/verify">
              <ListItem button style={{ paddingLeft: 76 }}>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Phương tiện vân tải TX"
                />
              </ListItem>
            </Link>
            <Link to="/host/approveCommand">
              <ListItem button style={{ paddingLeft: 76 }}>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Lệnh vận chuyển"
                />
              </ListItem>
            </Link>
          </Collapse>
         
          <List onClick={() => setOpen(true)}>
            <Link to="/host/driver/defineLevel">
              <ListItem button>
                <ListItemIcon>
                  <LocalGasStationIcon />
                </ListItemIcon>
                <ListItemText
                  onClick={e => {
                    changeTopic(e.target.innerText);
                  }}
                  primary="Định mức xăng dầu"
                />
              </ListItem>
            </Link>
          </List>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
const mapPropsToState = (state)=>{
  return ({
    user: state.user
  })
}
export default connect(
  mapPropsToState ,
  {
    getErrs
  }
)(withRouter(Wrapper));