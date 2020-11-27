import React from 'react';

import { Button, Dialog, DialogActions, DialogContent, Typography } from '@material-ui/core';
import table from '../../Assets/images/table.png';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="text" color="primary" onClick={handleClickOpen} size='small'>
                Tabla de asambleas
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
            >
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        x
                    </Button>
                </DialogActions>
                <DialogContent style={{marginTop:'-30px'}}>
                    <Typography variant="h5" style={{display:'flex', justifyContent:'center', marginBottom:'20px'}} color="primary">
                        Tabla de asambleas
                    </Typography>
                    <Typography style={{display:'flex', color:'#393939', fontSize:'16px', marginBottom:'14px'}}>
                        Identifica  en que columna se encuentra el tipo de tú solicitud.                      
                    </Typography>
                    <img src={table} alt="tabla-asamblea" />
                </DialogContent>
            </Dialog>
        </div>
    );
}
