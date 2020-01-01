import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {DoneOutline} from '@material-ui/icons';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 360,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Car(props) {
  const classes = useStyles();
  const {vehicle} = props;
  const [expanded, setExpanded] = React.useState(false);
  

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={vehicle.brand}
        subheader={vehicle.number}
      />
      <CardMedia
        className={classes.media}
        image=""
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {vehicle.type}
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Chọn phương tiện
      </Button>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          style={{float: 'right'}}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{textAlign: 'center'}}>Thông tin</Typography>
          <Typography paragraph>
            {`Số đăng kí: ${vehicle.number}`}
          </Typography>
          <Typography paragraph>
          {`Thời gian đăng kí: ${vehicle.date}`}
          </Typography>
          <Typography paragraph>
          {`Loại xe: ${vehicle.type}`}
          </Typography>
          <Typography paragraph>
          {`Nhãn xe chuyên dùng: ${vehicle.brand}`}
          </Typography>
          <Typography paragraph>
          {`Số khung: ${vehicle.chassis}`}
          </Typography>
          <Typography paragraph>
          {`Số máy: ${vehicle.engine}`}
          </Typography>
          <Typography paragraph>
          {`Năm sản xuất: ${vehicle.stateDate}`}
          </Typography>
          <Typography paragraph>
          {`Nguồn gốc: ${vehicle.sourse}`}
          </Typography>
          <Typography paragraph>
          {`Biên chế đơn vị: ${vehicle.owned}`}
          </Typography>
          <Typography paragraph>
          {`Phân cấp : ${vehicle.level}`}
          </Typography>
          <Typography paragraph>
          {`Trạng thái sử dụng: ${vehicle.status}`}
          </Typography>
          <Typography paragraph>
          {`Làm nhiệm vụ: ${vehicle.uses}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const Result = (props)=>{
  const {choose, vehicles} = props;
  const filterVehicles = (vehicles)=>{
    let objectVehicles = vehicles.filter(vehicle=>{
      switch(choose.infors.object){
        case 'Người':
            return vehicle.type == 'Xe Ca' || vehicle.type == 'Xe Chỉ huy';
            break
        case 'Vật chất':
            return vehicle.type == 'Xe Vận tải 1 cầu' || vehicle.type == 'Xe Vận tải nhiều cầu'
            break
        case 'Nhiên liệu':
            return vehicle.type == 'Xe Xi téc'  
            break
        default:
            return vehicle

      }
    })
    let fuelVehicles = objectVehicles.filter(vehicle=>{
      if(choose.infors.fuel == 'Đã bỏ qua'){
        return vehicle
      }else{
        return vehicle.fuel == choose.infors.fuel
      }
      
    })
    let abilityVehicles = fuelVehicles.filter(vehicle=>{
      switch(choose.infors.ability){
        case 'Cao':
            return vehicle.type == 'Xe Vận tải nhiều cầu'
            break
        default:
            return vehicle
      }})
    
    let volumeVehicles = abilityVehicles.filter(vehicle=>{
      if(choose.infors.volume == 'Đã bỏ qua'){
        return vehicle
      }else if (choose.infors.volume <= 2 ){
        return vehicle.limit <= 2
      }else if (choose.infors.volume <= 5 ){
        return vehicle.limit <= 5 && vehicle.limit > 2
      } else {
        return vehicle.limit > 5
      }
    });
    let amountVehicles = volumeVehicles.filter(vehicle=>{
      if(choose.infors.amount == 'Đã bỏ qua'){
        return vehicle
      }else if (choose.infors.amount <= 4 ){
        return vehicle.limit <= 4
      }else if (choose.infors.amount <= 9 ){
        return vehicle.limit <= 9 && vehicle.limit > 4
      }else if (choose.infors.amount <= 16 ){
        return vehicle.limit <= 16 && vehicle.limit > 9
      } else {
        return vehicle.limit > 16
      }
    });
    return amountVehicles.map((vehicle, index)=>{
      return <Grid item >
                <Car vehicle={vehicle}/>
            </Grid>
    })
  }
    return(
        <div>
           <Typography>Nhu cầu lựa chọn là:</Typography>
           <Typography>{`+ Đối tương: ${choose.infors.object}`}</Typography>
           <Typography>{`+ Nhiên liệu sử dụng: ${choose.infors.fuel}`} </Typography>
           <Typography>{`+ Khả năng thông qua: ${choose.infors.ability}`} </Typography>
           <Typography>{`+ Khối lượng vận chuyển: ${choose.infors.volume} tấn`}</Typography>
           <Typography>{`+ Khối lượng vận chuyển: ${choose.infors.amount} tấn`}</Typography>
            <Typography>Như vậy những phương tiện phù hợp là:</Typography>
            <Container style={{flexGrow: 1, marginTop: 20}}>
                <Grid container spacing={3} style={{display: "flex", justifyContent: 'space-around', alignItem: 'center'}}>
                    {filterVehicles(vehicles.data)}
                    
                </Grid>
            </Container>
        </div>
    )
};

export default Result;