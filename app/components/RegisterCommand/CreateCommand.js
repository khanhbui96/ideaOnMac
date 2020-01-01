import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FileBase64 from 'react-file-base64';
import moment from 'moment';
import jwt_decode from 'jwt-decode'

const useStyles = makeStyles(theme => {});
const CreateCommand = (props) => {
  const classes = useStyles();
  const decode = jwt_decode(localStorage.getItem('jwt'))
  const {addCommand, chooseCommand, setValue, selectCommand} = props;
  const [data, setData] = useState({
    status: false,
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


  const handleSend=()=>{
   addCommand(data, (v)=>{
     setValue(v)
   })
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
        {chooseCommand.isSelected ? <Button 
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
            setValue(0);
            setValue(1)
          }}
          variant="contained" 
          color="primary" >
            Xem xong
          </Button> :  <div>
          <Button variant="contained" color="primary" onClick={handleSend}>
            Gửi yêu cầu
          </Button>
        </div>}
       
      </form>
    </React.Fragment>
  );
};
export default CreateCommand;
