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

function RegularCommands(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [time, setTime] = React.useState('');
  const { commands, number, setOpen, getAllCommand } = props;
  const decode = jwt_decode(localStorage.getItem('jwt'));
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
      <StyledTableRow key={index} style={{ color: row.status ? 'red' : '' }} align='center'>
        <StyledTableCell
          style={{ color: !row.status ? 'red' : '' }}
          component="th"
          scope="row"
        >
          {index + 1}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }} align='center'>
          {row.doing}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }} align='center'>
          {moment(row.time).format('DD/MM/YYYY')}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }} align='center'>
          {row.from}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }} align='center'>
          {row.to}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }} align='center'>
          {row.result}
        </StyledTableCell>
      </StyledTableRow>
    );
  };
  const filterCommands = commands => {
    return commands
      .sort((a, b) => {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      })
      .filter(command => {
        return (
            command.license === number && command.time.slice(5,7).indexOf(time) !== -1
        );
      })
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((command, index) => {
        return Command(command, index);
      });
  };
  const value = commands.data.filter(command => {
    return (
        command.license === number && command.time.slice(5,7).indexOf(time) !== -1
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
    <div style={{display: 'flex', justifyContent: 'center', alignItems : 'center', flexDirection: 'column'}}>
      <Typography style={{ textAlign: 'center', marginTop: 16 }} variant="h4">
            Thông tin hoạt động
          </Typography>
          <Typography style={{ textAlign: 'center' }} variant="h4">
            {`Xe ${number}`}{' '}
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Tháng</InputLabel>
            <Select
              native
              onChange={e => {
                setTime(e.target.value)
              }}
            >
              <option value=""></option>
              <option value="01">Tháng 1</option>
              <option value="02">Tháng 2</option>
              <option value="03">Tháng 3</option>
              <option value="04">Tháng 4</option>
              <option value="05"> Tháng 5</option>
              <option value="06">Tháng 6</option>
              <option value="07"> Tháng 7</option>
              <option value="08">Tháng 8</option>
              <option value="09">Tháng 9</option>
              <option value="10">Tháng 10</option>
              <option value="11">Tháng 11</option>
              <option value="12">Tháng 12</option>
            </Select>
          </FormControl>
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
      

        <Table className={classes.table}>
        <TableHead>
              <TableRow style={{ background: '#3f51b5' }}>
                <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
                  STT
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
                  Nhiệm vụ
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
                  Thời gian
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
                  Đi từ
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
                  Đi đến
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
                  Tổng km
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
          <TableBody>
              <StyledTableRow >
                <StyledTableCell
                  
                ></StyledTableCell>
                <StyledTableCell
                  
                ></StyledTableCell>
                <StyledTableCell
                  
                ></StyledTableCell>
                <StyledTableCell
                  
                ></StyledTableCell>
                <StyledTableCell align='center'  >
                  Tổng cộng
                </StyledTableCell>
                <StyledTableCell align='center'
                ></StyledTableCell>
              </StyledTableRow>
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
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />{' '}
      </div>{' '}
    </Paper>
    <Button
            style={{ margin: 10 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Quay về
          </Button>
    </div>
  );
}
export default RegularCommands;


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
// import Loading from '../Loading'

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
//     marginBottom: 30,
//     minWidth: 200
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

// function RegularCommands(props) {
//   const classes = useStyles();
//   const {commands, number, setOpen, getAllCommand  } = props;
//   const [key, changeKey] = React.useState('');
//   const [time, setTime] = React.useState('');
//   const handleChange = e => {
//     changeKey(e.target.value);
//   };
//   const Command = (row, index) => {
//     return (
//       <StyledTableRow key={index} style={{ color: row.status ? 'red' : '' }}>
//         <StyledTableCell
//           style={{ color: !row.status ? 'red' : '' }}
//           component="th"
//           scope="row"
//         >
//           {index + 1}
//         </StyledTableCell>
//         <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
//           {row.doing}
//         </StyledTableCell>
//         <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
//           {moment(row.time).format('DD/MM/YYYY')}
//         </StyledTableCell>
//         <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
//           {row.from}
//         </StyledTableCell>
//         <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
//           {row.to}
//         </StyledTableCell>
//         <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
//           {row.result}
//         </StyledTableCell>
//       </StyledTableRow>
//     );
//   };
//   const filterCommands = commands => {
//     return commands
//       .sort((a, b) => {
//         return new Date(b.time).getTime() - new Date(a.time).getTime();
//       })
//       .filter(command => {
          
//         return (
//             command.license === number && command.time.slice(5,7).indexOf(time) !== -1
//         );
//       })
//       .map((command, index) => {
//         return Command(command, index);
//       });
//   };
//   useEffect(()=>{
//     getAllCommand()
//   },[])
//   return (
//     <div>
//         <Paper
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'column'
//           }}
//         >
          // <Typography style={{ textAlign: 'center' }} variant="h4">
          //   Thông tin hoạt động
          // </Typography>
          // <Typography style={{ textAlign: 'center' }} variant="h4">
          //   {`Xe ${number}`}{' '}
          // </Typography>
          // <FormControl className={classes.formControl}>
          //   <InputLabel htmlFor="age-native-simple">Tháng</InputLabel>
          //   <Select
          //     native
          //     onChange={e => {
          //       setTime(e.target.value)
          //     }}
          //   >
          //     <option value=""></option>
          //     <option value="01">Tháng 1</option>
          //     <option value="02">Tháng 2</option>
          //     <option value="03">Tháng 3</option>
          //     <option value="04">Tháng 4</option>
          //     <option value="05"> Tháng 5</option>
          //     <option value="06">Tháng 6</option>
          //     <option value="07"> Tháng 7</option>
          //     <option value="08">Tháng 8</option>
          //     <option value="09">Tháng 9</option>
          //     <option value="10">Tháng 10</option>
          //     <option value="11">Tháng 11</option>
          //     <option value="12">Tháng 12</option>
          //   </Select>
          // </FormControl>

//           <Table className={classes.table}>
            // <TableHead>
            //   <TableRow style={{ background: '#3f51b5' }}>
            //     <StyledTableCell style={{ background: '#3f51b5' }}>
            //       STT
            //     </StyledTableCell>
            //     <StyledTableCell style={{ background: '#3f51b5' }}>
            //       Nhiệm vụ
            //     </StyledTableCell>
            //     <StyledTableCell style={{ background: '#3f51b5' }}>
            //       Thời gian
            //     </StyledTableCell>
            //     <StyledTableCell style={{ background: '#3f51b5' }}>
            //       Đi từ
            //     </StyledTableCell>
            //     <StyledTableCell style={{ background: '#3f51b5' }}>
            //       Đi đến
            //     </StyledTableCell>
            //     <StyledTableCell style={{ background: '#3f51b5' }}>
            //       Tổng km
            //     </StyledTableCell>
            //   </TableRow>
            // </TableHead>
//             <TableBody>{filterCommands(commands)}</TableBody>
            // <TableBody>
            //   <StyledTableRow >
            //     <StyledTableCell
                  
            //     ></StyledTableCell>
            //     <StyledTableCell
                  
            //     ></StyledTableCell>
            //     <StyledTableCell
                  
            //     ></StyledTableCell>
            //     <StyledTableCell
                  
            //     ></StyledTableCell>
            //     <StyledTableCell  >
            //       Tổng cộng
            //     </StyledTableCell>
            //     <StyledTableCell
            //     ></StyledTableCell>
            //   </StyledTableRow>
            // </TableBody>
//           </Table>
          // <Button
          //   style={{ margin: 10 }}
          //   variant="outlined"
          //   size="small"
          //   color="primary"
          //   onClick={() => {
          //     setOpen(true);
          //   }}
          // >
          //   Quay về
          // </Button>
//         </Paper>
//     </div>
//   );
// }
// export default RegularCommands;
