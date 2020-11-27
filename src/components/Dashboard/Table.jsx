import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { LinearProgress } from '@material-ui/core';
import useStyles from '../../Assets/styles';
import useData from '../../Assets/useData';

export default function BasicTable() {
    const classes = useStyles();
    const data = useData();
    console.log(data);
    return (
        <TableContainer component={Paper} style={{ width: '85%' }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'#393939'}}>Código</TableCell>
                        <TableCell style={{color:'#393939'}} align="right">Fecha de creación</TableCell>
                        <TableCell style={{color:'#393939'}} align="right">Solicitud</TableCell>
                        <TableCell style={{color:'#393939'}} align="right">Tipo</TableCell>
                        <TableCell style={{color:'#393939'}} align="right">Estatus</TableCell>
                        <TableCell style={{color:'#393939'}} align="right">Vence</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((info) =>(
                        <TableRow>
                            <TableCell style={{color:'#616167'}} component="th" scope="row">
                               {info.id}
                            </TableCell>
                            <TableCell style={{color:'#616167'}} align="right">{info.creationDate}</TableCell>
                            <TableCell style={{color:'#616167'}} align="right">Roberto de Benito</TableCell>
                            <TableCell style={{color:'#616167'}} align="right">{info.title}</TableCell>
                            <TableCell style={{color:'#616167'}} align="right">
                                <LinearProgress variant="determinate" value={info.status} />
                            </TableCell>
                            <TableCell style={{color:'#616167'}} align="right">{info.expired}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
