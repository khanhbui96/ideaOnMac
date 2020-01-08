import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import {
  Mail,
  FindInPage,
  AttachMoney,
  Create,
  DirectionsCar
} from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';
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
  const [topic, changeTopic] = React.useState('Bộ công cụ quản lí vận tải - Hiệp đồng vận tải');
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
          <h1 style={{marginRight: 34}}>Chức năng</h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List>
          <Link to="/guest/select">
            <ListItem button onClick={() => setOpen(true)}>
              <ListItemIcon>
                <DirectionsCar />
              </ListItemIcon>
              <ListItemText
                onClick={e => {
                  changeTopic(e.target.innerText);
                }}
                primary="Lựa chọn phương tiện vận chuyển "
              />
            </ListItem>
          </Link>
          <Link to="/guest/calculation">
            <ListItem button onClick={() => setOpen(true)}>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText
                onClick={e => {
                  changeTopic(e.target.innerText);
                }}
                primary="Xác định lượng xăng dầu cần thiết "
              />
            </ListItem>
          </Link>
          <Link to="/guest/registerCommand">
            <ListItem button onClick={() => setOpen(true)}>
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText
                onClick={e => {
                  changeTopic(e.target.innerText);
                }}
                primary="Đăng kí lệnh vận chuyển"
              />
            </ListItem>
          </Link>
          <Link to="/guest/motoBikes">
            <ListItem button onClick={() => setOpen(true)}>
              <ListItemIcon>
                <MotorcycleIcon/>
              </ListItemIcon>
              <ListItemText
                onClick={e => {
                  changeTopic(e.target.innerText);
                }}
                primary="Quản lí phương tiện đơn vị"
              />
            </ListItem>
          </Link>
          <Link to ='/'>
            <ListItem button onClick={() => setOpen(true)}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText
                onClick={e => {
                  changeTopic(e.target.innerText);
                }}
                primary="Gửi ý kiến đóng góp"
              />
            </ListItem>
          </Link>
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