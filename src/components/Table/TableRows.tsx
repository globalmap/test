import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { validationStyle, validateEmpty } from '../validate';


const TableRows:React.FC<{data: any, keys: string[], dataAge: any, id: number}> = ({keys, data, dataAge, id}) => (
    
    <TableRow >
        <TableCell component="th" scope="row" style={{fontWeight: "bold"}}>{id+1}</TableCell>
        {keys.map((Key)=> {
            const renderData = validateEmpty(Key, data[Key]).trim()
            return (
                <TableCell key={`${Key}-${id}`} component="th" scope="row" style={validationStyle(data[Key], Key, dataAge)}>
                    {renderData}
                </TableCell>
            )
        })}
    </TableRow>
)

export default TableRows;