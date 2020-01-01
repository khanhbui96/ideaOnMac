

import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Clear} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import { red } from '@material-ui/core/colors';
import moment from 'moment'


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    },
}))(TableRow);

function createData(name, rank, position, unit, infor) {
    return { name, rank, position, unit, infor };
}



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
        position: 'relative',
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
    margin: {
        marginLeft: 8
    }
}));

function FilterCertificate(props) {
    const classes = useStyles();
    const {drivers} = props;
    const [key, changeKey] = React.useState('')
    const Driver = (row, index)=>{
        return <StyledTableRow key={row.name}>
        <StyledTableCell component="th"  align="center" scope="row">{index+1}</StyledTableCell>
        <StyledTableCell align="center">{row.name}</StyledTableCell>
        <StyledTableCell align="center">{row.unit}</StyledTableCell>
        <StyledTableCell align="center">{row.number}</StyledTableCell>
        <StyledTableCell align="center">{row.start}</StyledTableCell>
        <StyledTableCell align="center">{row.end}</StyledTableCell>
        
    </StyledTableRow>
    }
    const filterDrivers = (drivers)=>{
        return drivers.filter(driver=> {
            return driver.end == (new Date().getFullYear()+1) 
        } ).map((driver, index)=>{
            return Driver(driver, index)
        })
    }
    return (
        <Paper className={classes.root}>
            <Typography style={{ textAlign: 'center', margin: 20 }} variant='h4'>{`Danh sách bằng lái xe cần đổi trong năm ${new Date().getFullYear()+1} đơn vị`}</Typography>
            

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
                    {filterDrivers(drivers)}
                </TableBody>
            </Table>
        </Paper>
    );
}
export default FilterCertificate;