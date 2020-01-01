// import React from 'react';
// import Button from '@material-ui/core/Button';
// import  {Typography} from '@material-ui/core'

// const Result = (props)=>{
//     const {handleClick} = props 
//     return (

//           <hr class="MuiDivider-root"></hr>

//           <Typography paragraph>
//           Các đơn vị căn cứ vào kế hoạch sử dụng trang bị kỹ thuật để tính thêm lượng tiêu thụ nhiên liệu tăng thêm so vói định mức tại thông tư số 59/2015/TT- BQP ngày 13 tháng 07 năm 2015 của Bộ quốc phòng:
//           </Typography>
          

//         </div>
        
//     )
// };
// export default Result

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
      
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Result(props) {
  const [open, setOpen] = React.useState(false);
  const {handleClick, updateData, selectDefineLevel} = props;
  const [data, setData] = React.useState({
    extra1: updateData.data.extra1,
    extra2: updateData.data.extra2,
    extra3: updateData.data.extra3,
    extra4: updateData.data.extra4
  });
  let sum1 =  eval(updateData.data.define2 + '*' + updateData.data.distance+ '*' + 0.01);
  let extra = eval(updateData.data.extra1+ "+" +updateData.data.extra2+ "+" +updateData.data.extra3+ "+" +updateData.data.extra4);
  let sum2 = eval(sum1 + "*"+ extra + '*' + 0.01);
  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    selectDefineLevel({[e.target.name]: parseInt(e.target.value)})
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(()=>{

  },[updateData.isSelected])
  return (
    <div>
             <Typography paragraph>
            Kết quả là :
          </Typography>
          <Typography paragraph>
           {`+ Tên phương tiện: ${updateData.data.label}`}
          </Typography>
          <Typography paragraph>
          {`+ Loại nhiên liệu: ${updateData.data.fluel}`}
          </Typography>
          <Typography paragraph>
          {`+ Định mức thường xuyên của Quân đoàn: ${eval(updateData.data.define2 )}l/100km`}
          </Typography>
          <Typography paragraph>
          {`+ Cự ly vận chuyển: ${updateData.data.distance}km`}
          </Typography>
          <Typography paragraph>
          {`+ Lượng cấp phát: ${sum1}l`}
          </Typography>
          <Typography paragraph>
          {`+ Lượng bổ sung: ${sum2}l`}
          </Typography>
          <Typography paragraph>
          {`+ Tổng cấp phát: ${sum1+ sum2}l`}
          </Typography>
          <hr class="MuiDivider-root"></hr>
          <Typography paragraph color="secondary" >
          Ghi chú:
          </Typography>
          <Typography paragraph color="secondary">
          Một số trường hợp cần bổ sung thêm nhiên liệu cho xe ô tô
          </Typography>
          <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Tính lượng bổ sung
      </Button>
          <hr class="MuiDivider-root"></hr>
          <Button variant="contained" color="primary" onClick={
            ()=>{
              selectDefineLevel({
                label: '',
                fluel: '',
                define1: '0',
                define2: '0',
                distance: 0,
                extra1:0,
                extra2:0,
                extra3:0,
                extra4:0
            })
              handleClick()
            }
            
            }>
        Làm mới 
        </Button>
      
     <div >
     <Dialog  onClose={handleClose}  aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle  id="customized-dialog-title" onClose={handleClose}>
        Các đơn vị căn cứ vào kế hoạch sử dụng trang bị kỹ thuật để tính thêm lượng tiêu thụ nhiên liệu tăng thêm so vói định mức tại thông tư số 59/2015/TT- BQP ngày 13 tháng 07 năm 2015 của Bộ quốc phòng:  
        </DialogTitle>
        <DialogContent dividers>
        <Typography >
            1. Xe ô tô mở niêm cất dài hạn chạy 300km đầu tiên; Bổ túc, huấn luyện dã ngoại, diễn tập trong điều kiện rừng núi có kế hoạch được Tư lệnh phê duyệt thì định mức tiêu thụ xăng dầu được tính tăng lên nhưng không quá 35% so với hạn mức được quy định theo: Thông tư số 59/2015/TT- BQP ngày 13 tháng 07 năm 2015 của Bộ Quốc phòng về việc Ban hành định mức hao hụt, tiêu thụ xăng dầu trong Quân đội.
          </Typography>
          <TextField
                    onChange={handleChange}
                    name= 'extra1'
                    value = {data.extra1}
                    id="standard-full-width"
                    placeholder="% tăng thêm"
                    margin="normal"
                    style={{width: 520}}
                />
          <Typography paragraph>
          2. Khi xe chở hàng, kéo rơ moóc( hoặc kéo pháo) đơn vị tính: Lít.
          </Typography>
          <Typography paragraph>
          - Cách tính: 
          </Typography>
          <Typography>
          + Đối với ô tô động cơ Điezen: tăng 1,5 lít cho mỗi 100 tấn.km (kể cả trọng lượng riêng của rơ moóc); 
          </Typography>
          <TextField
                    id="standard-full-width"
                    onChange={handleChange}
                    name= 'extra2'
                    value = {data.extra2}
                    placeholder="Số tấn.km"
                    margin="normal"
                    style={{width: 520}}
                />
          <Typography>
          + Đối với ô tô động cơ Xăng: tăng 2,5 lít cho mỗi 100 tấn.km (kể cả trọng lượng riêng của rơ moóc); 
          </Typography>
          <TextField
                    id="standard-full-width"
                    onChange={handleChange}
                    name= 'extra3'
                    value = {data.extra3}
                    placeholder="Số tấn.km"
                    margin="normal"
                    style={{width: 520}}
                />
          <Typography >
          + Đối với ô tô có thùng tự đổ tăng: 0,3 lít cho mỗi lần nâng ben.
          </Typography>
          <TextField
                    id="standard-full-width"
                    onChange={handleChange}
                    name= 'extra4'
                    value = {data.extra4}
                    placeholder="Số tấn.km"
                    margin="normal"
                    style={{width: 520}}
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            setData({
              extra1:0,
              extra2:0,
              extra3:0,
              extra4:0
            })
            selectDefineLevel({
              extra1:0,
              extra2:0,
              extra3:0,
              extra4:0
            })
          }} color="primary">
            Đặt lại
          </Button>
          <Button onClick={handleClose} color="primary">
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
     </div>
    </div>
  );
}