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

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{ width: '85%' }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell align="right">Fecha de creación</TableCell>
                        <TableCell align="right">Solicitud</TableCell>
                        <TableCell align="right">Tipo</TableCell>
                        <TableCell align="right">Estatus</TableCell>
                        <TableCell align="right">Vence</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            001
                        </TableCell>
                        <TableCell align="right">0123456</TableCell>
                        <TableCell align="right">Paola Tapia</TableCell>
                        <TableCell align="right">Compra de terreno </TableCell>
                        <TableCell align="right">
                            <LinearProgress variant="determinate" value={75} />
                        </TableCell>
                        <TableCell align="right">12 diciembre 2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            001
                        </TableCell>
                        <TableCell align="right">0123456</TableCell>
                        <TableCell align="right">Paola Tapia</TableCell>
                        <TableCell align="right">Compra de terreno </TableCell>
                        <TableCell align="right">
                            <LinearProgress variant="determinate" value={75} />
                        </TableCell>
                        <TableCell align="right">12 diciembre 2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            001
                        </TableCell>
                        <TableCell align="right">0123456</TableCell>
                        <TableCell align="right">Paola Tapia</TableCell>
                        <TableCell align="right">Compra de terreno </TableCell>
                        <TableCell align="right">
                            <LinearProgress variant="determinate" value={75} />
                        </TableCell>
                        <TableCell align="right">12 diciembre 2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            001
                        </TableCell>
                        <TableCell align="right">0123456</TableCell>
                        <TableCell align="right">Paola Tapia</TableCell>
                        <TableCell align="right">Compra de terreno </TableCell>
                        <TableCell align="right">
                            <LinearProgress variant="determinate" value={75} />
                        </TableCell>
                        <TableCell align="right">12 diciembre 2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            001
                        </TableCell>
                        <TableCell align="right">0123456</TableCell>
                        <TableCell align="right">Paola Tapia</TableCell>
                        <TableCell align="right">Compra de terreno </TableCell>
                        <TableCell align="right">
                            <LinearProgress variant="determinate" value={75} />
                        </TableCell>
                        <TableCell align="right">12 diciembre 2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            001
                        </TableCell>
                        <TableCell align="right">0123456</TableCell>
                        <TableCell align="right">Paola Tapia</TableCell>
                        <TableCell align="right">Compra de terreno </TableCell>
                        <TableCell align="right">
                            <LinearProgress variant="determinate" value={75} />
                        </TableCell>
                        <TableCell align="right">12 diciembre 2020</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
}
