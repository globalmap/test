import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableRows from './TableRows';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TableCustom: React.FC<{data: object[], keys: string[]}> = ({data, keys}) => {
    const classes = useStyles()  
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight: "bold"}}>ID</TableCell>
                    {keys.map((item, index) => (
                        <TableCell key={index} style={{fontWeight: "bold"}}>{item}</TableCell>
                    ))}
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((data: any, index: number) => <TableRows key={`${parseInt(data['Age'])}-${index}`} keys={keys} id={index} data={data} dataAge={parseInt(data['Age'])} />)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableCustom;