import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
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
import image from '../images/person.jpg'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const currencies1 = [
    {
        value: '',
        label: '',
      },
    {
      value: 'B1',
      label: 'B1',
    },
    {
      value: 'B2',
      label: 'B2',
    },
    {
        value: 'C',
        label: 'C',
      },
      {
        value: 'D',
        label: 'D',
      },{
        value: 'E',
        label: 'E',
      },
      {
        value: 'FC',
        label: 'FC',
      }
  ];
  const currencies2 = [
    {
        value: '',
        label: '',
      },
    {
      value: '1/',
      label: '1/',
    },
    {
      value: '2/',
      label: '2/',
    },
    {
        value: '3/',
        label: '3/',
      },
      {
        value: '4/',
        label: '4/',
      },{
        value: '1//',
        label: '1/',
      },
      {
        value: '2//',
        label: '2//',
      }
  ];
  const currencies3 = [
    {
        value: '',
        label: '',
      },
    {
      value: 'Thợ sữa chữa',
      label: 'Thợ sữa chữa',
    },
    {
      value: 'Lái xe',
      label: 'Lái xe',
    },
    {
        value: 'Chỉ huy',
        label: 'Chỉ huy',
      }
  
  ];
  const currencies4 = [
    {
        value: '',
        label: '',
      },
    {
      value: 'Bậc 1',
      label: 'Bậc 1',
    },
    {
      value: 'Bậc 2',
      label: 'Bậc 2',
    },
    {
        value: 'Bậc 3',
        label: 'Bậc 3',
      },
      {
        value: 'Bậc 4',
        label: 'Bậc 4',
      },{
        value: 'Bậc 5',
        label: 'Bậc 5',
      },
      {
        value: 'Bậc 6',
        label: 'Bậc 6',
      },
      {
        value: 'Bậc 7',
        label: 'Bậc 7',
      }
  ];
  const currencies5 = [
    {
        value: '',
        label: '',
      },
    {
      value: 'Bậc 1',
      label: 'Bậc 1',
    },
    {
      value: 'Bậc 2',
      label: 'Bậc 2',
    },
    {
        value: 'Bậc 3',
        label: 'Bậc 3',
      },
      {
        value: 'Bậc 4',
        label: 'Bậc 4',
      },{
        value: 'Bậc 5',
        label: 'Bậc 5',
      },
      {
        value: 'Bậc 6',
        label: 'Bậc 6',
      },
      {
        value: 'Bậc 7',
        label: 'Bậc 7',
      },
        
      {
        value: 'Bậc 8',
        label: 'Bậc 8',
      },
      {
        value: 'Bậc 9',
        label: 'Bậc 9',
      },
      {
        value: 'Bậc 10',
        label: 'Bậc 10',
      }
  ];
  const currencies6 = [
    {
        value: '',
        label: '',
      },
    {
      value: 'Đại học',
      label: 'Đại học',
    },
    {
      value: 'Cao đẳng',
      label: 'Cao đẳng',
    },
    {
        value: 'Trung cấp',
        label: 'Trung cấp',
      },
      {
        value: 'Sơ cấp',
        label: 'Sơ cấp',
      }
  
  ];
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        marginTop: 10
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    appBar: {
        level: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    avatar: {
        backgroundColor: red[500],
    },
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,
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
    const { createProfile } = props;
    const [open, setOpen] = React.useState(false);
    const {
        addDriver, 
        setValue, 
        updateData, 
        selectDriver, 
        updateDriver,
        errs,
        getErrs
    } = props;
    const [data, changeData] = React.useState(
        {...updateData.driver}
    
    );
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    const handleCreate = () =>{
        addDriver(data, (v)=>{
            getErrs({});
            setValue(v);
        });
    }
    const handleSaveChange = ()=>{
        updateDriver(updateData.driver._id, data, ()=>{
            setValue(1);
            setValue(0)
        })
    } 
    const handleChange = (e) => {
        changeData({ ...data, [e.target.name]: e.target.value })
    }
    const handleChangeSelect = name => event => {
        changeData({ ...data, [name]: event.target.value });
      };
    const getFiles = (files) => {
        changeData({ ...data, base64: files[0].base64 })
    }
    return (
        <React.Fragment>
                <form encType='multipart/form-data' onSubmit={handleSubmit}>
                    <List>
                        <Card className={classes.card}>
                            
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={4} style={{display: 'flex', justifyContent: 'center'}}>
                                    <Button
                                    style={{ borderRadius: '50%' }}
                                    component="label"
                                >
                                    <div style={{ display: "none" }}>
                                        <FileBase64
                                            multiple={true}
                                            onDone={getFiles} />
                                    </div>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={
                                            data.base64 ? 
                                            data.base64 : 
                                            image} 
                                        className={classes.bigAvatar} >
                                    </Avatar>
                                </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Họ và tên"
                                                name='name'
                                                value={data.name}
                                                onChange={handleChange}
                                                error = {errs.name ? true : false}
                                                helperText={errs.name ? errs.name : ''}
                                            />
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Năm sinh"
                                                name='birthday'
                                                value={data.birthday}
                                                onChange={handleChange}
                                                error = {errs.birthday ? true : false}
                                                helperText={errs.birthday ? errs.birthday : ''}
                                            />
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Số giấy phép lái xe"
                                                value={data.number}
                                                name='number'
                                                onChange={handleChange}
                                                error = {errs.number ? true : false}
                                                helperText={errs.number ? errs.number : ''}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Ngày cấp"
                                                name='start'
                                                value={data.start}
                                                onChange={handleChange}
                                                error = {errs.start ? true : false}
                                                helperText={errs.start ? errs.start : ''}
                                            />
                                            <TextField
                                                select
                                                label="Hạng xe"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.level}
                                                onChange={handleChangeSelect('level')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                error = {errs.level ? true : false}
                                                helperText={errs.level ? errs.level : ''}
                                            >
                                                {currencies1.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Hạn sử dụng"
                                                value={data.end}
                                                name='end'
                                                onChange={handleChange}
                                                error = {errs.end ? true : false}
                                                helperText={errs.end ? errs.end : ''}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                        <TextField
                                                select
                                                label="Cấp bậc"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.rank}
                                                onChange={handleChangeSelect('rank')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                error = {errs.rank ? true : false}
                                                helperText={errs.rank ? errs.rank : ''}
                                            >
                                                {currencies2.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                select
                                                label="Bậc lương"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.salary}
                                                onChange={handleChangeSelect('salary')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                error = {errs.rank ? true : false}
                                                helperText={errs.rank ? errs.rank : ''}
                                            >
                                                {currencies5.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Năm nhận"
                                                name='salaryReceive'
                                                value={data.salaryReceive}
                                                onChange={handleChange}
                                                error = {errs.dateReceive ? true : false}
                                                helperText={errs.dateReceive ? errs.dateReceive : ''}
                                            />
                                            
                                        </ListItem>
                                    </Grid><Grid item xs={4}>
                                        
                                        <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                        <TextField
                                                select
                                                label="Chức vụ"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.position}
                                                onChange={handleChangeSelect('position')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                error = {errs.position ? true : false}
                                                helperText={errs.position ? errs.position : ''}
                                            >
                                                {currencies3.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Đơn vị"
                                                value={data.unit}
                                                name='unit'
                                                onChange={handleChange}
                                                error = {errs.unit ? true : false}
                                                helperText={errs.unit ? errs.unit : ''}
                                            />

                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Nơi đăng kí HKTT"
                                                name='registArea'
                                                value={data.registArea}
                                                onChange={handleChange}
                                                error = {errs.registArea ? true : false}
                                                helperText={errs.registArea ? errs.registArea : ''}
                                            />
                                        </ListItem>
                                    </Grid><Grid item xs={4}>
                                        <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                        <TextField
                                                select
                                                label="Trình độ"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.academic}
                                                onChange={handleChangeSelect('academic')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                error = {errs.degree ? true : false}
                                                helperText={errs.degree ? errs.degree : ''}
                                            >
                                                {currencies6.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                        <TextField
                                                select
                                                label="Bậc kĩ thuật"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.degree}
                                                onChange={handleChangeSelect('degree')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                error = {errs.degree ? true : false}
                                                helperText={errs.degree ? errs.degree : ''}
                                            >
                                                {currencies4.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Năm nhận"
                                                name='dateReceive'
                                                value={data.dateReceive}
                                                onChange={handleChange}
                                                error = {errs.dateReceive ? true : false}
                                                helperText={errs.dateReceive ? errs.dateReceive : ''}
                                            />
                                            
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItem>
                                    <TextField
                                            style={{ width: "100%", marginBottom: 24 }}
                                            label="Thông tin thêm"
                                            name='uses'
                                            value={data.uses}
                                            onChange={handleChange}
                                        />
                                        </ListItem>
                                    </Grid>
                                    
                                </Grid> </CardContent>
                                { !updateData.isSelected ? <Button 
                                    style={{marginBottom: 10}} 
                                    variant = "outlined" 
                                    color='primary' 
                                    type = 'submit'
                                    onClick={handleCreate}
                                    >
                                        Thêm hồ sơ
                                </Button> : <div><Button 
                                    style={{marginBottom: 10}} 
                                    variant = "outlined" 
                                    color='primary'
                                    onClick={handleSaveChange} 
                                    type = 'submit'>
                                        Lưu thay đổi hồ sơ
                                </Button>
                                <Button 
                                style={{marginBottom: 10, marginLeft: 10}} 
                                variant = "outlined" 
                                color='primary'
                                onClick ={()=>{
                                    selectDriver({
                                        name: "",
                                        birthday: "",
                                        number: "",
                                        start: "",
                                        level: "",
                                        end: "",
                                        rank: "",
                                        salary: "",
                                        position:"",
                                        academic:'',
                                        salaryReceive: '',
                                        unit: "",
                                        registArea: "",
                                        uses: "",
                                        degree: "",
                                        dateReceive: ""
                                    })
                                    setValue(1);
                                    setValue(0)
                                }} 
                                >
                                    Hủy
                            </Button></div>
                            }
                        </Card>
                    </List>
                </form>

        </React.Fragment>

    )
}
export default CreateProfile