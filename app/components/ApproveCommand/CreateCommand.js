import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import FileBase64 from 'react-file-base64';
import moment from 'moment';
import jwt_decode from 'jwt-decode'
import renderToDocx from '../../utils/renderToDocx'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';


const useStyles = makeStyles(theme => {});
const CreateCommand = (props) => {
  const classes = useStyles();
  const decode = jwt_decode(localStorage.getItem('jwt'))
  const {addCommand, chooseCommand, setValue, selectCommand, updateCommand} = props;
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    status: true,
    userId: decode.id,
    time: moment().format().slice(0,16),
    ...chooseCommand.command
  })
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeSelect = name => e => {
    setData({ ...data, [name]: e.target.value });
  };


  const handleClick = () => {
    updateCommand(data._id, {...data,status: true })
    setValue(0)
    
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExport = ()=>{
    renderToDocx({...data});
    setOpen(true)
  }
  const createCommand = ()=>{
    addCommand({...data, status: true },(v)=>{
      setValue(v)
    });
   
  }
  useEffect(()=>{
    
  },[])
  return (
    <React.Fragment>
      
      <form
        encType="multipart/form-data"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          boxSizing: "border-box",
          padding: 20
        }}
      >
        <Typography align="center" variant="h5" style={{margin: 10}} >LỆNH ĐIỀU PHƯƠNG TIỆN</Typography>
        <Grid>
          <TextField
            style={{ width: '60vw', marginBottom: 24 }}
            label="Căn cứ"
            name="base"
            value={data.base}
            onChange={handleChange}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Nay điều"
              name="use"
              value={data.use}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Nhãn hiệu"
              name="brand"
              value={data.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Đơn vị"
              name="unit"
              value={data.unit}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Biển kiểm soát"
              name="license"
              value={data.license}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Thực hiện nhiệm vụ"
              name="doing"
              value={data.doing}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Cho đơn vị"
              name="user1"
              value={data.user1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Số lượng"
              name="amount"
              value={data.amount}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Đi từ"
              name="from"
              value={data.from}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Đến"
              name="to"
              value={data.to}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Km(giờ)"
              name="distance"
              value={data.distance}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Số chuyến"
              name="times"
              value={data.times}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Về từ"
              name="from2"
              value={data.from2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Đến"
              name="to2"
              value={data.to2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Km(giờ)"
              name="distance2"
              value={data.distance2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Chở hàng kết hợp"
              name="co"
              value={data.co}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Cho đơn vị"
              name="user2"
              value={data.user2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Số lượng"
              name="amount2"
              value={data.amount2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Số chuyến"
              name="times2"
              value={data.time2}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              id="datetime-local"
              label="Thời gian thực hiện"
              type="datetime-local"
              onChange={handleChangeSelect('time')}
              defaultValue={moment()
                .format()
                .slice(0, 16)}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Địa điểm"
              name="place"
              value={data.place}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TextField
                style={{ width: '100%', marginBottom: 24 }}
                label="Tổng Km"
                name="result"
                value={data.result}
                onChange={handleChange}
              />
              <TextField
                style={{ marginLeft: 10 }}
                select
                label="Nhiên liệu"
                onChange={handleChangeSelect('fuel')}
                style={{ width: '100%', marginBottom: 24 }}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu
                  }
                }}
              >
                {['', 'Xăng', 'Dầu'].map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ width: '100%', marginBottom: 24 }}
              label="Quyết toán ngành"
              name="pay"
              value={data.pay}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {chooseCommand.isSelected ? <div><Button 
          onClick={()=>{
            selectCommand({
              status: false,
              userId: '',
              amount: '',
              to: '',
              to2: '',
              from: '',
              from2: '',
              base: '',
              use: '',
              brand: '',
              unit: '',
              license: '',
              doing: '',
              user1: '',
              distance: '',
              distance2: '',
              times: '',
              co: '',
              user2: '',
              times2:'',
              amount2: '',
              place: '',
              fuel: '',
              pay:'',
              result: ''
          });
            setValue(1);
            
          }}
          variant="contained" 
          color="primary" >
            Thoát
          </Button>
          {!data.status ? <Button variant="contained" color="primary" style={{ marginLeft: 6 }} onClick={handleClick} >
            Phê duyệt 
          </Button> : null}
          <Button variant="contained" color="primary" style={{ marginLeft: 6 }} onClick={handleExport} >
            Xuất lệnh ra văn bản
          </Button>
          </div> :  <div>
          <Button variant="contained" color="primary" style={{ marginLeft: 6 }} onClick={createCommand} >
            Tạo lệnh 
          </Button>
          <Button variant="contained" color="primary" style={{ marginLeft: 6 }} onClick={handleExport} >
            Xuất lệnh ra văn bản
          </Button>
          
        </div>}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
            {`Đã xuât ra văn bản. Truy cập đường dẫn C:/ để mở file có tên ${data.license}${data.time.slice(0,10)}.docx. Cảm ơn!`}
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Đã rõ
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </React.Fragment>
  );
};
export default CreateCommand;
