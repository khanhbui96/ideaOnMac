import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import ImageIcon from '@material-ui/icons/Image';
import { Grid, CardMedia } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import image from '../images/truck.jpg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const currencies1 = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Xăng',
    label: 'Xăng'
  },
  {
    value: 'Dầu Diezen',
    label: 'Dầu diezen'
  }
];
const currencies2 = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Xe Vận tải 1 cầu',
    label: 'Xe Vận tải 1 cầu'
  },
  {
    value: 'Xe Vận tải nhiều cầu',
    label: 'Xe Vận tải nhiều cầu'
  },
  {
    value: 'Xe Xi téc',
    label: 'Xe Xi téc'
  },
  {
    value: 'Xe Chỉ huy',
    label: 'Xe Chỉ huy'
  },
  {
    value: 'Xe Ca',
    label: 'Xe Ca'
  },
  {
    value: 'Xe Cứu thương',
    label: 'Xe Cứu thương'
  },
  {
    value: 'Xe Chuyên dùng khác',
    label: 'Xe Chuyên dùng khác'
  }
];
const currencies3 = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Trang bị BQP',
    label: 'Trang bị BQP'
  },
  {
    value: 'Tự mua sắm',
    label: 'Tự mua sắm'
  }
];
const currencies4 = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Cấp 1',
    label: 'Cấp 1'
  },
  {
    value: 'Cấp 2',
    label: 'Cấp 2'
  },
  {
    value: 'Cấp 3',
    label: 'Cấp 3'
  },
  {
    value: 'Cấp 4',
    label: 'Cấp 4'
  },
  {
    value: 'Cấp 5',
    label: 'Cấp 5'
  }
];
const currencies5 = [
  {
    value: '',
    label: ''
  },
  {
    value: 'Sử dụng thường xuyên',
    label: 'Sử dụng thường xuyên'
  },
  {
    value: 'Niêm cất ngắn hạn',
    label: 'Niêm cất ngắn hạn'
  },
  {
    value: 'Niêm cất dài hạn',
    label: 'Niêm cất dài hạn'
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 700,
    marginTop: 10
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  appBar: {
    fuel: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  avatar: {
    backgroundColor: red[500]
  },
  bigAvatar: {
    margin: 10,
    width: 350,
    height: 250,
    borderRadius: "50%"
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function CreateProfile(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {
    addVehicle,
    setValue,
    updateData,
    selectVehicle,
    updateVehicle,
    errs,
    getErrs
  } = props;
  const [erros, setErros] = React.useState({})
  const [data, changeData] = React.useState({ ...updateData.vehicle });
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleCreate = ()=>{
    addVehicle(data, (v)=>{
      getErrs({});
      setValue(v);
    });
  }
  const handleSaveChange=()=>{
      updateVehicle(updateData.vehicle._id, data, ()=>{
        setValue(0);
      });
  }
  const handleChange = e => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeSelect = name => event => {
    changeData({ ...data, [name]: event.target.value });
  };
  const getFiles = files => {
    changeData({ ...data, base64: files[0].base64});
  };
  useEffect(()=>{
    setErros({...errs})
  },[errs])
  return (
    <React.Fragment>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <List>
          <Card className={classes.card}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={4} sm={12}>
                  <Button component="label" style={{borderRadius: '50%'}}>
                    <div style={{ display: 'none' }}>
                      <FileBase64 multiple={true} onDone={getFiles} />
                    </div>
                    <CardMedia
                      image={
                        data.base64
                          ? data.base64
                          : image
                      }
                      className={classes.bigAvatar}
                    ></CardMedia>
                  </Button>
                </Grid>
                <Grid item md={4} sm={12}>
                  <ListItem
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <TextField
                      error = {erros.brand ? true : false}
                      helperText={erros.brand ? erros.brand : ''}
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Nhãn xe chuyên dùng"
                      name="brand"
                      value={data.brand}
                      onChange={handleChange}
                    />
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Số đăng kí"
                      name="number"
                      value={data.number}
                      onChange={handleChange}
                      error = {erros.number ? true : false}
                      helperText={erros.number ? erros.number : ''}
                    />
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Thời gian đăng kí"
                      name="date"
                      value={data.date}
                      onChange={handleChange}
                      error = {erros.date ? true : false}
                      helperText={erros.date ? erros.date : ''}
                    />
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Số khung"
                      name="chassis"
                      value={data.chassis}
                      onChange={handleChange}
                      error = {erros.chassis ? true : false}
                      helperText={erros.chassis ? erros.chassis : ''}
                    />
                  </ListItem>
                </Grid>
                <Grid item md={4} sm={12}>
                  <ListItem
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <Grid style={{ display: 'flex', flexDirection: 'row' }}>
                      
                      <TextField
                        select
                        label="Loại xe"
                        style={{
                          width: '100%',
                          marginBottom: 24,
                          marginRight: 10
                        }}
                        value={data.type}
                        onChange={handleChangeSelect('type')}
                        SelectProps={{
                          native: true,
                          MenuProps: {
                            className: classes.menu
                          }
                        }}
                        error = {erros.type ? true : false}
                        helperText={erros.type ? erros.type : ''}
                      >
                        {currencies2.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                     
                     
                      <TextField
                        style={{ width: '100%', marginBottom: 24 }}
                        label="Tải trọng tối đa"
                        name="limit"
                        value={data.limit}
                        onChange={handleChange}
                        error = {erros.limit ? true : false}
                        helperText={erros.limit ? erros.limit : ''}
                      />
                     
                    </Grid>
                    <TextField
                      select
                      label="Nhiên liệu sử dụng"
                      style={{ width: '100%', marginBottom: 24 }}
                      value={data.fuel}
                      onChange={handleChangeSelect('fuel')}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      error = {erros.fuel ? true : false}
                      helperText={erros.fuel ? erros.fuel : ''}
                    >
                      {currencies1.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      select
                      label="Nguồn gốc"
                      style={{ width: '100%', marginBottom: 24 }}
                      value={data.sourse}
                      onChange={handleChangeSelect('sourse')}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      error = {erros.sourse ? true : false}
                      helperText={erros.sourse ? erros.sourse : ''}
                    >
                      {currencies3.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Số máy"
                      name="engine"
                      value={data.engine}
                      onChange={handleChange}
                      error = {erros.engine ? true : false}
                      helperText={erros.engine ? erros.engine : ''}
                    />
                  </ListItem>
                </Grid>
                <Grid item md={4} sm={12}>
                  <ListItem
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Năm sản xuất"
                      name="productDate"
                      value={data.productDate}
                      onChange={handleChange}
                      error = {erros.productDate ? true : false}
                      helperText={erros.productDate ? erros.productDate : ''}
                    />
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Năm bắt đầu sử dụng"
                      name="startDate"
                      value={data.startDate}
                      onChange={handleChange}
                      error = {erros.startDate ? true : false}
                      helperText={erros.startDate ? erros.startDate : ''}
                    />
                  </ListItem>
                </Grid>
                <Grid item md={4} sm={12}>
                  <ListItem
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Biên chế đơn vị"
                      name="owned"
                      value={data.owned}
                      onChange={handleChange}
                      error = {erros.owned ? true : false}
                      helperText={erros.owned ? erros.owned : ''}
                    />
                    <TextField
                      select
                      label="Phân cấp"
                      style={{ width: '100%', marginBottom: 24 }}
                      value={data.level}
                      onChange={handleChangeSelect('level')}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      error = {erros.level ? true : false}
                      helperText={erros.level ? erros.level : ''}
                    >
                      {currencies4.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </ListItem>
                </Grid>
                <Grid item md={4} sm={12}>
                  <ListItem
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <TextField
                      select
                      label="Trạng thái sử dụng"
                      style={{ width: '100%', marginBottom: 24 }}
                      value={data.status}
                      onChange={handleChangeSelect('status')}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      error = {erros.status ? true : false}
                      helperText={erros.status ? erros.status : ''}
                    >
                      {currencies5.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Làm nhiệm vụ"
                      name="uses"
                      value={data.uses}
                      onChange={handleChange}
                      error = {erros.uses ? true : false}
                      helperText={erros.uses ? erros.uses : ''}
                    />
                  </ListItem>
                </Grid>
                <Grid item md={12} sm={12}>
                  <ListItem>
                    <TextField
                      style={{ width: '100%', marginBottom: 24 }}
                      label="Thông tin thêm (VD: người đang giữ phương tiện...) "
                      name="infor"
                      value={data.infor}
                      onChange={handleChange}
                    />
                  </ListItem>
                </Grid>
              </Grid>{' '}
            </CardContent>
            {!updateData.isSelected ? (
              <Button
                style={{ marginBottom: 10 }}
                variant="outlined"
                color="primary"
                type="submit"
                onClick={handleCreate}
              >
                Tạo hồ sơ
              </Button>
            ) : (
              <div>
                <Button
                  style={{ marginBottom: 10 }}
                  variant="outlined"
                  color="primary"
                  onClick={handleSaveChange}
                  type="submit"
                >
                  Lưu thay đổi
                </Button>
                <Button
                  style={{ marginBottom: 10, marginLeft: 10 }}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    selectVehicle({
                      fuel: '',
                      brand: '',
                      number: '',
                      date: '',
                      type: '',
                      sourse: '',
                      startDate: '',
                      productDate: '',
                      owned: '',
                      level: '',
                      uses: '',
                      status: '',
                      infor: '',
                      chassis: '',
                      engine: ''
                    });
                    setValue(1);
                    setValue(0);
                  }}
                >
                  Thoát
                </Button>
              </div>
            )}
          </Card>
        </List>
      </form>
    </React.Fragment>
  );
}
const mapStateToProps = state => ({});
export default CreateProfile;
