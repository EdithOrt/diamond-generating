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
                Tabla de asamblea
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        x
                    </Button>
                </DialogActions>
                <DialogContent>
                    <Typography variant="h3" color="primary">
                        Tabla de asamblea
                    </Typography>
                    <img src={table} alt="tabla-asamblea" />
                </DialogContent>
            </Dialog>
        </div>
    );
}
