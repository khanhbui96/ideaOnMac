// import React, { useEffect } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import { Clear } from '@material-ui/icons';
// import { Link } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Button from '@material-ui/core/Button';
// import { red } from '@material-ui/core/colors';
// import moment from 'moment';
// import jwt_decode from 'jwt-decode';
// import Loading from '../Loading';

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

// function createData(name, rank, position, unit, infor) {
//   return { name, rank, position, unit, infor };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto'
//   },
//   table: {
//     minWidth: 700,
//     marginTop: 10
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
//   appBar: {
//     position: 'relative'
//   },
//   title: {
//     marginLeft: theme.spacing(2),
//     flex: 1
//   },
//   avatar: {
//     backgroundColor: red[500]
//   },
//   bigAvatar: {
//     margin: 10,
//     width: 200,
//     height: 200
//   },
//   imageBox: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   margin: {
//     marginLeft: 8
//   }
// }));

// function AllCommand(props) {
//   const classes = useStyles();
//   const { commands, selectCommand, setValue } = props;
//   const decode = jwt_decode(localStorage.getItem('jwt'));
//   const [key, changeKey] = React.useState('');
//   const handleChange = e => {
//     changeKey(e.target.value);
//   };
//   const Command = (row, index) => {
//     return (
//       <StyledTableRow key={index} style={{color: row.status ? 'red' : ''}} >
//         <StyledTableCell style={{color: !row.status ? 'red' : ''}} component="th" align="center" scope="row">
//           {index + 1}
//         </StyledTableCell>
//         <StyledTableCell style={{color: !row.status ? 'red' : ''}} align="center">{row.doing}</StyledTableCell>
//         <StyledTableCell style={{color: !row.status ? 'red' : ''}}  align="center">{row.pay}</StyledTableCell>
//         <StyledTableCell style={{color: !row.status ? 'red' : ''}} align="center">
//           {moment(row.time).format('DD/MM/YYYY')}
//         </StyledTableCell>
//         <StyledTableCell style={{color: !row.status ? 'red' : ''}} align="center">{row.status ? 'Đã phê duyệt' : "Chưa phê duyệt"}</StyledTableCell>
//         <StyledTableCell align="center">
//           <Button
//             variant="outlined"
//             size="small"
//             color="primary"
//             onClick={() => {
//               selectCommand(row);
//               setValue(1);
//               setValue(0);
//             }}
//           >
//             Xem
//           </Button>
//         </StyledTableCell>
//       </StyledTableRow>
//     );
//   };
//   const filterCommands = commands => {
//     return commands
      // .filter(command => {
      //   return command.userId == decode.id;
      // })
//       .sort((a, b) => {
//         return new Date(b.time).getTime() - new Date(a.time).getTime();
//       })
//       .filter(command => {
//         return (
//           command.doing.indexOf(key) !== -1 ||
//           command.pay.indexOf(key) !== -1 ||
//           command.time.indexOf(key)!== -1
//         );
//       })
//       .map((command, index) => {
//         return Command(command, index);
//       });
//   };
//   return (
//     <Paper className={classes.root}>
//       <Typography style={{ textAlign: 'center' }} variant="h4">
//         Danh sách lệnh vận chuyển
//       </Typography>
//       <div>
//         <form>
//           <TextField
//             style={{ margin: 16 }}
//             placeholder="Tìm kiếm"
//             name="keyword"
//             onChange={handleChange}
//           />
//           <TextField
//             id="datetime-local"
//             label="Thời gian thực hiện"
//             type="date"
//             onChange={handleChange}
//             InputLabelProps={{
//               shrink: true
//             }}
//           />
//         </form>
//       </div>

//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow style={{ background: '#3f51b5' }}>
//             <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
//               STT
//             </StyledTableCell>
//             <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
//               Thực hiện nhiệm vụ
//             </StyledTableCell>
//             <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
//               Quyết toán ngành
//             </StyledTableCell>
//             <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
//               Thời gian thực hiện
//             </StyledTableCell>
//             <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
//               Trạng thái
//             </StyledTableCell>
//             <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
//               Chi tiết
//             </StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>{filterCommands(commands.data)}</TableBody>
//       </Table>
//       { commands.isUpdate ?  <Loading/>: null}
//     </Paper>
//   );
// }
// export default AllCommand;


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
import moment from 'moment';
import jwt_decode from 'jwt-decode';
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

function AllCommand(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const decode = jwt_decode(localStorage.getItem('jwt'));
  const { commands, selectCommand, setValue, deleteCommand,  getAllCommand } = props;
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, commands.data.length - page * rowsPerPage);
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
  const Command = (row, index) => {
    return (
      <StyledTableRow key={index} style={{ color: row.status ? 'red' : '' }}>
        <StyledTableCell
          style={{ color: !row.status ? 'red' : '' }}
          component="th"
          align="center"
          scope="row"
        >
          {index + 1}
        </StyledTableCell>
        <StyledTableCell
          style={{ color: !row.status ? 'red' : '' }}
          align="center"
        >
          {row.doing}
        </StyledTableCell>
        <StyledTableCell
          style={{ color: !row.status ? 'red' : '' }}
          align="center"
        >
          {row.pay}
        </StyledTableCell>
        <StyledTableCell
          style={{ color: !row.status ? 'red' : '' }}
          align="center"
        >
          {moment(row.time).format('DD/MM/YYYY')}
        </StyledTableCell>
        <StyledTableCell
          style={{ color: !row.status ? 'red' : '' }}
          align="center"
        >
          {row.status ? 'Đã phê duyệt' : 'Chưa phê duyệt'}
        </StyledTableCell>
        <StyledTableCell align="center">
          <Button
            style={{ marginRight: 10 }}
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => {
              selectCommand(row);
              setValue(0);
            }}
          >
            Xem
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => {
              deleteCommand(row._id);
            }}
          >
            Xóa
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    );
  };
  const filterCommands = commands => {
    return commands
      .filter(command => {
        return command.userId == decode.id;
      })
      .sort((a, b) => {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      })
      .filter(command => {
        return (
          command.doing.indexOf(key) !== -1 ||
          command.pay.indexOf(key) !== -1 ||
          command.time.indexOf(key) !== -1
        );
      })
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((command, index) => {
        return Command(command, index);
      });
  };
  const value = commands.data.filter(command => {
    return command.userId == decode.id;
  }).filter(command => {
    return (
      command.doing.indexOf(key) !== -1 ||
      command.pay.indexOf(key) !== -1 ||
      command.time.indexOf(key) !== -1
    );
  }).length;
  useEffect(() => {
    getAllCommand();
    if (value < 5 || value == 5) {
      setRowsPerPage(value);
    } else {
      setRowsPerPage(5);
    }
   
  }, [value]);
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
      <Typography style={{ textAlign: 'center' }} variant="h4">
        Danh sách lệnh vận chuyển
      </Typography>
      <div>
        <form>
          <TextField
            style={{ margin: 16 }}
            placeholder="Tìm kiếm"
            name="keyword"
            onChange={handleChange}
          />
          <TextField
            id="datetime-local"
            label="Thời gian thực hiện"
            type="date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
      </div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow style={{ background: '#3f51b5' }}>
              <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
                STT
              </StyledTableCell>
              <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
                Thực hiện nhiệm vụ
              </StyledTableCell>
              <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
                Quyết toán ngành
              </StyledTableCell>
              <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
                Thời gian thực hiện
              </StyledTableCell>
              <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
                Trạng thái
              </StyledTableCell>
              <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
                Chi tiết
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {' '}
            {filterCommands(commands.data)}{' '}
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
        {commands.isUpdate ? <Loading /> : null}{' '}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          style={{
            float: 'right'
          }}
          colSpan={3}
          count={value}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'Số hàng trong trang'
            },
            native: false
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />{' '}
      </div>{' '}
    </Paper>
  );
}
export default AllCommand;
