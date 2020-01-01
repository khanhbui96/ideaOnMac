// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import MenuItem from '@material-ui/core/MenuItem';
// import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
// import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
// import Link from 'react-router-dom/Link';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Add from '@material-ui/icons/Add';
// import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import Dialog from '@material-ui/core/Dialog';
// import moment from 'moment';
// import UpdateVerify from './UpdateVerify';


// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white
//   },
//   body: {
//     fontSize: 14
//   }
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default
//     }
//   }
// }))(TableRow);
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));
// function InforVerify(props) {
//   const classes = useStyles();
//   const theme = useTheme();
//   const { vehicles, selectVehicle, updateVehicle, updateData} = props;
//   const [single, setSingle] = React.useState(null);
//   const [open, setOpen] = React.useState(false);
//   const [status, setStatus] = React.useState('');
//   const [keyword, setKeyword] = React.useState('');
//   const handleChange = event => {
//     setKeyword(event.target.value);
//   };

  // const Vehicle = (row, index) => {
  //   return (
  //     <StyledTableRow key={index}>
  //       <StyledTableCell component="th" scope="row">
  //         {index + 1}
  //       </StyledTableCell>
  //       <StyledTableCell>{row.brand}</StyledTableCell>
  //       <StyledTableCell>{row.number}</StyledTableCell>
  //       <StyledTableCell> {moment(row.verify.start ).format('DD/MM/YYYY')}</StyledTableCell>
  //       <StyledTableCell>{moment(row.verify.end ).format('DD/MM/YYYY')}</StyledTableCell>
  //       <StyledTableCell>
  //         <Button
  //           variant="outlined"
  //           size="small"
  //           color="primary"
  //           className={classes.margin}
  //           onClick={() => {
  //             selectVehicle(row)
  //             handleClickOpen()
  //           }}
  //         >
  //           Cập nhật thông tin kiểm định
  //         </Button>
  //       </StyledTableCell>
  //     </StyledTableRow>
  //   );
  // };
  // const filterVehicles = vehicles => {
  //   return vehicles
  //     .filter(vehicles=>{
  //       return (
  //         vehicles.status == 'Sử dụng thường xuyên'
  //       )
  //     })
  //     .filter(vehicle=>{
  //       return(
  //         vehicle.verify.end.slice(5,7).indexOf(keyword) !== -1
  //       )
  //     })
  //     .map((vehicle, index) => {
  //       return Vehicle(vehicle, index);
  //     });
  // };
  // function handleClickOpen() {
  //   setOpen(true);
  // }
  // function handleClose() {
  //   setOpen(false);
  // }
//   function handleChangeSingle(value) {
//     setSingle(value);
//   }
//   const selectStyles = {
//     input: base => ({
//       ...base,
//       color: theme.palette.text.primary,
//       '& input': {
//         font: 'inherit'
//       }
//     })
//   };
//   return (
//     <Paper style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      // <Typography style={{ textAlign: 'center', marginTop : 20 }} variant="h5">
      //   THỜI HẠN KIỂM ĐỊNH PHƯƠNG TIỆN
      // </Typography>
      // <FormControl className={classes.formControl}>
      //   <InputLabel id="demo-simple-select-label">Thời gian</InputLabel>
      //   <Select
      //     labelId="demo-simple-select-label"
      //     id="demo-simple-select"
      //     value={keyword}
      //     onChange={handleChange}
      //   >
      //     <MenuItem value=''>Tất cả</MenuItem>
      //     <MenuItem value='3'>Đợt 1 (Tháng 3)</MenuItem>
      //     <MenuItem value='9'>Đợi 2 (Tháng 9)</MenuItem>
      //   </Select>
      // </FormControl>
      // <div>
      //   <Dialog
      //     open={open}
      //     onClose={handleClose}
      //     aria-labelledby="form-dialog-title"
      //   >
      //     <UpdateVerify
      //       updateData={updateData}
      //       handleClose={handleClose}
      //       updateVehicle={updateVehicle}
      //     />
      //   </Dialog>
      // </div>

//       <Table className={classes.table}>
        // <TableHead>
        //   <TableRow style={{ background: '#3f51b5' }}>
        //     <StyledTableCell style={{ background: '#3f51b5' }}>
        //       STT
        //     </StyledTableCell>
        //     <StyledTableCell style={{ background: '#3f51b5' }}>
        //       Nhãn xe chuyên dùng
        //     </StyledTableCell>
        //     <StyledTableCell style={{ background: '#3f51b5' }}>
        //       Số đăng kí
        //     </StyledTableCell>
        //     <StyledTableCell style={{ background: '#3f51b5' }}>
        //       Ngày kiểm định
        //     </StyledTableCell>
        //     <StyledTableCell style={{ background: '#3f51b5' }}>
        //       Ngày hết hạn kiểm định
        //     </StyledTableCell>

        //     <StyledTableCell style={{ background: '#3f51b5' }}>
        //       Thao tác
        //     </StyledTableCell>
        //   </TableRow>
        // </TableHead>
//         <TableBody>{filterVehicles(vehicles)}</TableBody>
//       </Table>

//       <div></div>
//     </Paper>
//   );
// }

// export default InforVerify;


import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import MenuItem from '@material-ui/core/MenuItem';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Loading from '../Loading';
import UpdateVerify from './UpdateVerify';
import moment from 'moment';

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
}));
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: 'auto'
  }
}));

function InforVerify(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [keyword, setKeyword] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const { vehicles, selectVehicle, updateVehicle, updateData } = props;
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, vehicles.data.length - page * rowsPerPage);
  const handleChange = e => {
    setKeyword(e.target.value);
  };

  function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const Vehicle = (row, index) => {
    return (
      <StyledTableRow key={index}>
        <StyledTableCell component="th" scope="row" align="center">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell align="center">{row.brand}</StyledTableCell>
        <StyledTableCell align="center">{row.number}</StyledTableCell>
        <StyledTableCell align="center"> {moment(row.verify.start ).format('DD/MM/YYYY')}</StyledTableCell>
        <StyledTableCell align="center">{moment(row.verify.end ).format('DD/MM/YYYY')}</StyledTableCell>
        <StyledTableCell align="center">
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={() => {
              selectVehicle(row)
              handleClickOpen()
            }}
          >
            Cập nhật thông tin kiểm định
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    );
  };
  const filterVehicles = vehicles => {
    return vehicles
      .filter(vehicles=>{
        return (
          vehicles.status == 'Sử dụng thường xuyên'
        )
      })
      .filter(vehicle=>{
        return(
          vehicle.verify.end.slice(5,7).indexOf(keyword) !== -1
        )
      })
      .map((vehicle, index) => {
        return Vehicle(vehicle, index);
      });
  };
  const value = vehicles.data.filter(vehicle => {
    return (
      vehicle.verify.end.slice(5,7).indexOf(keyword) !== -1
    );
  }).length;
  useEffect(() => {
    if (value < 6 || value == 6) {
      setRowsPerPage(value);
    }else{
      setRowsPerPage(6)
    }
  }, [value]);
  return (
    <Paper className={classes.root}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Typography style={{ textAlign: 'center', marginTop : 20 }} variant="h5">
        THỜI HẠN KIỂM ĐỊNH PHƯƠNG TIỆN
      </Typography>
      <FormControl className={classes.formControl} style = {{width: 160, marginBottom: 20}}>
        <InputLabel id="demo-simple-select-label" >Thời gian</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={keyword}
          onChange={handleChange}
        >
          <MenuItem value=''>Tất cả</MenuItem>
          <MenuItem value='3'>Đợt 1 (Tháng 3)</MenuItem>
          <MenuItem value='9'>Đợi 2 (Tháng 9)</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className={classes.tableWrapper}>
      
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <UpdateVerify
            updateData={updateData}
            handleClose={handleClose}
            updateVehicle={updateVehicle}
          />
        </Dialog>
      </div>
        <Table className={classes.table}>
        <TableHead>
          <TableRow style={{ background: '#3f51b5' }}>
            <StyledTableCell style={{ background: '#3f51b5' }} align="center">
              STT
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align="center">
              Nhãn xe chuyên dùng
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align="center">
              Số đăng kí
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align="center">
              Ngày kiểm định
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align="center">
              Ngày hết hạn kiểm định
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align="center">
              Thao tác
            </StyledTableCell>
          </TableRow>
        </TableHead>

          <TableBody>
            {filterVehicles(vehicles.data)}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>

        {vehicles.isUpdate ? <Loading /> : null}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          style={{ float: 'right' }}
          colSpan={3}
          count={value}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'Số hàng trong trang' },
            native: false
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </div>
    </Paper>
  );
}
export default InforVerify;
