import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog'
import {Subtitles} from '@material-ui/icons'
import { setServers } from 'dns';
const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: '100%',
    },
    iconButton:{
        marginTop: 16
    }
}));
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
const AddDefineLevel = (props)=>{
    const classes = useStyles();
    
    const {
        updateData, 
        selectDefineLevel, 
        updateDefineLevel,
        addDefineLevel,
        setOpen,
        errs,
        getErrs,
        
    } = props
    const [data, changeData]= React.useState({...updateData.data})
    const handleCreate = ()=>{
        addDefineLevel({
            ...data
        }, (v)=>{
            getErrs({});
            setOpen(v)
        });
        
    }
    function handleClickOpen() {
        setOpen(true);
      }
    
    const handleChange = (e)=>{
        changeData({
            ...data,
           [ e.target.name]: e.target.value 
        })
    };
    const handleChangeSelect = name => event => {
        changeData({ ...data, [name]: event.target.value });
      };
    return(
        <React.Fragment>
            {props.collection ? <DialogTitle id="form-dialog-title">Sửa</DialogTitle> : <DialogTitle id="form-dialog-title">Thêm định mức mới</DialogTitle>}
            <DialogContent >
                    
                        <TextField
                            margin="dense"
                            id="name"
                            fullWidth
                            label="Tên trang bị"
                            name='label'
                            value={data.label}
                            onChange={handleChange}
                            error = {errs.label ? true : false}
                            helperText={errs.label ? errs.label : ''}
                        />
                        <FormControl className={classes.formControl}>
                       
                        <TextField
                            select
                            label="Tên nhiên liệu"
                            style={{ width: '100%', marginBottom: 24 }}
                            value={data.fluel}
                            onChange={handleChangeSelect('fluel')}
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                className: classes.menu
                                }
                            }}
                            error = {errs.fluel ? true : false}
                            helperText={errs.fluel ? errs.fluel : ''}
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
                            id="name"
                            fullWidth
                            label="Định mức Theo TT/59 của BQP (lít/100km)"
                            name='define1'
                            value={data.define1}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            fullWidth
                            label="	Định mức Thường xuyên của Quân đoàn (lít/100km)"
                            name='define2'
                            value={data.define2}
                            onChange={handleChange}
                        />
                    
                    </DialogContent>
                    <DialogActions>

                    { !updateData.isSelected ? <Button 
                                    onClick={handleCreate} 
                                    style={{marginBottom: 10}} 
                                    variant = "outlined" 
                                    color='primary' 
                                    type = 'submit'>
                                        Tạo mới
                                </Button> : <div><Button 
                                    style={{marginBottom: 10}} 
                                    variant = "outlined" 
                                    color='primary'
                                    onClick={()=>{
                                        updateDefineLevel(updateData.data._id, data);
                                        selectDefineLevel({
                                            label: "",
                                            fluel: "",
                                            define1: "",
                                            define2: "",
                                        });
                                        setOpen(false)
                                    }} 
                                    type = 'submit'>
                                        Lưu thay đổi 
                                </Button>
                                <Button 
                                style={{marginBottom: 10, marginLeft: 10}} 
                                variant = "outlined" 
                                color='primary'
                                onClick ={()=>{
                                    selectDefineLevel({
                                        label: "",
                                        fluel: "",
                                        define1: "",
                                        define2: "",
                                    });
                                    setOpen(false)
                                }} 
                                >
                                    Thoát
                            </Button></div>
                            }

                    </DialogActions>
    </React.Fragment>
    )
}
export default AddDefineLevel
