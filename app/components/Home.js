import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from 'react-router-dom/Link';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  card: {
    minWidth: 280,
    marginLeft: 20
  }
}));

export default function Home() {
  const classes = useStyles();
  useEffect(()=>{
  },[])
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
          Bộ công cụ quản lí vận tải - Hiệp đồng vận tải
          </Typography>
        </Toolbar>
      </AppBar>
        <Typography variant="h4" style = {{display: 'flex', marginTop: 150 }}>
            Mời chọn chức năng
          </Typography>
      <div style = {{display: 'flex', marginTop: 50 }}>
      
    <Card className={classes.card}>
          
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Quản lí cá nhân
        </Typography>
        <Typography variant="body2" component="p">
          Chức năng hiệp đồng vận tải sẽ không có ở mục này
        </Typography>
        <Typography variant="body2" component="p">
          Dữ liệu sẽ được lưu tại máy tính cá nhân
        </Typography>
        <Typography variant="body2" component="p">
          Không phải cài thêm bất kì Cơ sở dữ liệu nào
        </Typography>
      </CardContent>
      <CardActions>
      <Link to='/offline'><Button>Bắt đầu</Button></Link>
      </CardActions>
    </Card>
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Quản lí tập trung 
        </Typography>
        <Typography variant="body2" component="p">
          Hỗ trợ quản lí hiệp đồng vận tải từ xa
        </Typography>
        <Typography variant="body2" component="p">
          Dữ liệu được lưu tập trung tại server 
        </Typography>
        <Typography variant="body2" component="p">
          Server được cài đặt tại mạng Lan hoặc Internet
        </Typography>
        <Typography variant="body2" component="p">
          Máy tính phải có kết nối mạng Lan hoặc Internet
        </Typography>
      </CardContent>
      <CardActions>
      <Link to='/login'><Button>Bắt đầu</Button></Link>
      </CardActions>
    </Card>
    
    </div>
      
            
    </div>
  );
}