import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import { Subtitles } from '@material-ui/icons';
import jwt_decode from 'jwt-decode';

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: '100%'
  },
  iconButton: {
    marginTop: 16
  }
}));
const currencies1 = [
  {
    value: '',
    label: ''
  },
  {
    value: 'motor',
    label: 'Xe môtô - xe gắn máy'
  },
  {
    value: 'car',
    label: 'Xe ôtô '
  }
];
const AddMotoBike = props => {
  const classes = useStyles();
  const decodeId = localStorage.getItem('jwt') ? jwt_decode(localStorage.getItem('jwt')).id : 'user' ;
  const {
    updateData,
    selectMotoBike,
    updateMotoBike,
    addMotoBike,
    setOpen,
    errs,
    getErrs
  } = props;
  const [data, changeData] = React.useState({
    ...updateData.data,
    userId: decodeId
  });
  function handleClickOpen() {
    setOpen(true);
  }
  const handleCreate = () => {
    addMotoBike(
      {
        ...data
      },
      (v) => {
        getErrs({});
        setOpen(v);
      }
    );
  };
  const handleChangeSelect = name => event => {
    changeData({ ...data, [name]: event.target.value });
  };
  const handleChange = e => {
    changeData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  return (
    <React.Fragment>
      {props.collection ? (
        <DialogTitle id="form-dialog-title">Sửa</DialogTitle>
      ) : (
        <DialogTitle id="form-dialog-title">Thêm định mức mới</DialogTitle>
      )}
      <DialogContent>
        <TextField
          margin="dense"
          fullWidth
          label="Họ và tên"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errs.name ? true : false}
          helperText={errs.name ? errs.name : ''}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Đơn vị"
          name="unit"
          value={data.unit}
          onChange={handleChange}
          error={errs.unit ? true : false}
          helperText={errs.unit ? errs.unit : ''}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Địa chỉ"
          name="address"
          value={data.address}
          onChange={handleChange}
          error={errs.address ? true : false}
          helperText={errs.address ? errs.address : ''}
        />
        <FormControl className={classes.formControl}>
          <TextField
            select
            label="Loại xe"
            value={data.fluel}
            onChange={handleChangeSelect('type')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
            error={errs.type ? true : false}
            helperText={errs.type ? errs.type : ''}
          >
            {currencies1.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </FormControl>
        <TextField
          margin="dense"
          fullWidth
          label="Tên xe"
          value={data.model}
          name="model"
          onChange={handleChange}
          error={errs.model ? true : false}
          helperText={errs.model ? errs.model : ''}
        />
        <TextField
          margin="dense"
          fullWidth
          label="	Màu sắc"
          value={data.color}
          name="color"
          onChange={handleChange}
          error={errs.color ? true : false}
          helperText={errs.color ? errs.color : ''}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Biển kiểm soát"
          value={data.license}
          name="license"
          onChange={handleChange}
          error={errs.license ? true : false}
          helperText={errs.license ? errs.license : ''}
        />
        <TextField
          id="date"
          label="Hạn bảo hiểm phương tiện"
          type="date"
          onChange={handleChange}
          margin="dense"
          value={data.duration}
          name="duration"
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          error={errs.duration ? true : false}
          helperText={errs.duration ? errs.duration : ''}
        />
      </DialogContent>
      <DialogActions>
        {!updateData.isSelected ? (
          <Button
            onClick={handleCreate}
            style={{ marginBottom: 10 }}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Tạo mới
          </Button>
        ) : (
          <div>
            <Button
              style={{ marginBottom: 10 }}
              variant="outlined"
              color="primary"
              onClick={() => {
                updateMotoBike(updateData.data._id, data);
                props.setOpen(false);
              }}
              type="submit"
            >
              Lưu thay đổi hồ sơ
            </Button>
            <Button
              style={{ marginBottom: 10, marginLeft: 10 }}
              variant="outlined"
              color="primary"
              onClick={() => {
                selectMotoBike({
                  name: '',
                  unit: '',
                  address: '',
                  type: '',
                  model: '',
                  color: '',
                  license:'',
                  duration: ''
                });
                props.setOpen(false);
              }}
            >
              Hủy
            </Button>
          </div>
        )}
      </DialogActions>
    </React.Fragment>
  );
};
export default AddMotoBike;
