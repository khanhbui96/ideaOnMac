import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UpdateVerify = (props)=>{
  const {updateData, handleClose, updateVehicle} = props;
  const [data, setData] = React.useState({...updateData.vehicle})
  const handleChange = (e)=>{
    setData({
      ...data,
      verify: {
        ...data.verify,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleClick = (e)=>{
    updateVehicle(data._id, data, ()=>{ 
      handleClose()
    })
   
  }
    return  (

        <div style={{  padding: 20 }}>
        <Typography style={{ textAlign: 'center' }} variant="h5">
          Bổ sung thông tin kiểm định phượng tiện
        </Typography>
        <TextField
          style={{ width: '100%', marginBottom: 24 }}
          label="Nhãn xe chuyên dùng"
          name="owned"
          value={data.brand}
        />
        <TextField
          style={{ width: '100%', marginBottom: 24 }}
          label="Số đăng kí"
          name="owned"
          value={data.number}
        />
        <TextField
          style={{ marginTop: 20 }}
          id="date"
          label="Ngày kiểm định "
          type="date"
          fullWidth
          name='start'
          onChange={handleChange}
          defaultValue={data.verify.start}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="date"
          style={{ marginTop: 20 }}
          label="Ngày hết kiểm định "
          type="date"
          fullWidth
          name='end'
          onChange={handleChange}
          defaultValue={data.verify.end}
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          style={{ margin: 10, float: 'right' }}
          variant="outlined"
          color="primary"
          type="submit"
          onClick={handleClick}
        >
          Cập nhật
        </Button>
      </div>
   
    )
};
export default UpdateVerify