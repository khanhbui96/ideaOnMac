
// import React, {useEffect} from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import { Clear} from '@material-ui/icons'
// import { Link } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Button from '@material-ui/core/Button'
// import { red } from '@material-ui/core/colors';
// import Loading from '../Loading';

// const StyledTableCell = withStyles(theme => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
//     root: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.background.default,
//         }
//     },
// }))(TableRow);

// function createData(name, rank, position, unit, infor) {
//     return { name, rank, position, unit, infor };
// }



// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing(3),
//         overflowX: 'auto',
//     },
//     table: {
//         minWidth: 700,
//         marginTop: 10
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     appBar: {
//         position: 'relative',
//     },
//     title: {
//         marginLeft: theme.spacing(2),
//         flex: 1,
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
//     bigAvatar: {
//         margin: 10,
//         width: 200,
//         height: 200,
//     },
//     imageBox: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     margin: {
//         marginLeft: 8
//     }
// }));

// function AllCertificate(props) {
//     const classes = useStyles();
//     const {drivers} = props;
//     const [key, changeKey] = React.useState('')
//     const handleChange = (e) => {
//        changeKey(e.target.value)
//     }
    // const Driver = (row, index)=>{
    //     return <StyledTableRow key={row.name}>
    //     <StyledTableCell component="th"  align="center" scope="row">{index+1}</StyledTableCell>
    //     <StyledTableCell align="center">{row.name}</StyledTableCell>
    //     <StyledTableCell align="center">{row.unit}</StyledTableCell>
    //     <StyledTableCell align="center">{row.number}</StyledTableCell>
    //     <StyledTableCell align="center">{row.start}</StyledTableCell>
    //     <StyledTableCell align="center">{row.end}</StyledTableCell>
        
    // </StyledTableRow>
    // }
    // const filterDrivers = (drivers)=>{
    //     return drivers.filter(driver=> {
    //         return driver.name.indexOf(key) !== -1 || driver.unit.indexOf(key) !== -1 
    //     } ).map((driver, index)=>{
    //         return Driver(driver, index)
    //     })
    // }
//     return (
//         <Paper className={classes.root}>
//             <Typography style={{ textAlign: 'center' }} variant='h4'>Giấy phép lái xe trong đơn vị</Typography>
//             <div>
//                 <form >
//                     <TextField
//                         style={{ margin: 8 }}
//                         placeholder='Tìm kiếm'
//                         name='keyword'
//                         onChange={handleChange}
//                     />
//                     <IconButton ><Clear /></IconButton>
//                 </form>

//                 <FormControl className={classes.formControl}>
//                     <InputLabel htmlFor="age-native-simple">Cấp bậc</InputLabel>
//                     <Select native  onChange={handleChange}>
//                         <option value="" />
//                         <option value='1/'>1/</option>
//                         <option value='2/'>2/</option>
//                         <option value='3/'>3/</option>
//                         <option value='4/'>4/</option>
//                         <option value='1//'>1//</option>
//                         <option value='2//'>2//</option>  

//                     </Select>
//                 </FormControl>
//                 <FormControl className={classes.formControl}>
//                     <InputLabel htmlFor="age-native-simple">Chức vụ</InputLabel>
//                     <Select native  onChange={handleChange} >
//                         <option value="" />
//                         <option value='Thợ sữa chữa'>Thợ sữa chữa</option>
//                         <option value='Lái xe'>Lái xe</option>
//                         <option value='Chỉ huy'>Chỉ huy</option>
//                     </Select>
                     
//                 </FormControl>
//             </div>

//             <Table className={classes.table}>
                // <TableHead>
                // <TableRow style={{ background: "#3f51b5" }}>
                //         <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                //             STT
                //         </StyledTableCell>
                //         <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                //             Họ và tên 
                //         </StyledTableCell>
                //         <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                //             Đơn vị
                //         </StyledTableCell>
                //         <StyledTableCell align="center" style={{ background: "#3f51b5" }} align="center">
                //             Số giấy phép lái xe
                //         </StyledTableCell>
                //         <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                //             Ngày cấp
                //         </StyledTableCell>
                //         <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                //             Ngày hết hạn
                //         </StyledTableCell>
                //     </TableRow>
                // </TableHead>
//                 <TableBody>
//                     {filterDrivers(drivers.data)}
//                 </TableBody>
//             </Table>
//             { drivers.isUpdate ?  <Loading/>: null}
//         </Paper>
//     );
// }
// export default AllCertificate;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Loading from '../Loading';

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
        {' '}
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}{' '}
      </IconButton>{' '}
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {' '}
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}{' '}
      </IconButton>{' '}
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {' '}
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}{' '}
      </IconButton>{' '}
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {' '}
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}{' '}
      </IconButton>{' '}
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

function AllCertificate(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const {drivers} = props;
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, drivers.data.length - page * rowsPerPage);
  const [key, changeKey] = React.useState('');
  const handleChange = e => {
    changeKey(e.target.value);
  };

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
  const Driver = (row, index)=>{
    return <StyledTableRow key={row.name}>
    <StyledTableCell component="th"  align="center" scope="row">{index+1}</StyledTableCell>
    <StyledTableCell align="center">{row.name}</StyledTableCell>
    <StyledTableCell align="center">{row.rank}</StyledTableCell>
    <StyledTableCell align="center">{row.position}</StyledTableCell>
    <StyledTableCell align="center">{row.unit}</StyledTableCell>
    <StyledTableCell align="center">{row.number}</StyledTableCell>
    <StyledTableCell align="center">{row.start}</StyledTableCell>
    <StyledTableCell align="center">{row.end}</StyledTableCell>
    
</StyledTableRow>
}
const filterDrivers = (drivers)=>{
    return drivers
        .filter(driver => {
        return (
          driver.name.indexOf(key) !== -1 ||
          driver.rank == key ||
          driver.position == key
        );
      })
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((driver, index) => {
        return Driver(driver, index);
      });
}
  const value = drivers.data.filter(driver => {
    return (
      driver.name.indexOf(key) !== -1 ||
      driver.rank == key ||
      driver.position == key
    );
  }).length;
  useEffect(() => {
    if (value < 5 || value == 5) {
      setRowsPerPage(value);
    }else {
      setRowsPerPage(5)
    }
  }, [value]);
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Typography
          style={{
            textAlign: 'center'
          }}
          variant="h4"
        >
          {' '}
          Giấy phép lái xe{' '}
        </Typography>{' '}
        <div>
          <TextField
            style={{
              margin: 16
            }}
            placeholder="Tìm kiếm"
            name="keyword"
            onChange={handleChange}
          />
          <FormControl
            style={{
              width: 160,
              marginRight: 16
            }}
          >
            <InputLabel> Cấp bậc </InputLabel>{' '}
            <Select native onChange={handleChange}>
              <option value="" />
              <option value="1/"> 1 / </option>{' '}
              <option value="2/"> 2 / </option>{' '}
              <option value="3/"> 3 / </option>{' '}
              <option value="4/"> 4 / </option>{' '}
              <option value="1//"> 1 //</option>
              <option value="2//"> 2 //</option>
            </Select>{' '}
          </FormControl>{' '}
          <FormControl>
            <InputLabel> Chức vụ </InputLabel>{' '}
            <Select native onChange={handleChange}>
              <option value="" />
              <option value="Thợ sữa chữa"> Thợ sữa chữa </option>{' '}
              <option value="Lái xe"> Lái xe </option>{' '}
              <option value="Chỉ huy"> Chỉ huy </option>{' '}
            </Select>
          </FormControl>
        </div>{' '}
        <Table className={classes.table}>
        <TableHead>
                <TableRow style={{ background: "#3f51b5" }}>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            STT
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Họ và tên 
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Cấp bậc
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Chức vụ
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Đơn vị
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }} align="center">
                            Số giấy phép lái xe
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Ngày cấp
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Ngày hết hạn
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
          <TableBody>
            {' '}
            {filterDrivers(drivers.data)}{' '}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 48 * emptyRows
                }}
              >
                <TableCell colSpan={6} />{' '}
              </TableRow>
            )}{' '}
          </TableBody>
        </Table>
        {drivers.isUpdate ? <Loading /> : null}{' '}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          style={{
            float: 'right'
          }}
          colSpan={3}
          count={value}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />{' '}
      </div>{' '}
    </Paper>
  );
}
export default AllCertificate;
