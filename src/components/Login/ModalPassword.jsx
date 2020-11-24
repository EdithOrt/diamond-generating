import React from 'react';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, Typography } from '@material-ui/core';
import useStyles from '../../Assets/styles';
import envelope from '../../Assets/images/envelope.png';
function ModalPassword() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant='text' color="textPrimary" size='small' className={classes.btnPassword} onClick={handleClickOpen}>
                ¿Olvidaste tu contraseña?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{ paper: classes.root }}
            >
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        x
                    </Button>
                </DialogActions>
                <DialogContent className={classes.modalPassword}
                >
                    <Typography variant="h6" color="primary">
                        Enviar correo al Administrador
                    </Typography>
                    <img src={envelope} alt='send' />
                    <Typography variant="h6" color="textPrimary">
                        administrador@dgcm.com
                    </Typography>
                    <Button onClick={handleClose} color="primary" variant='contained'>
                        Enviar
          </Button>
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default ModalPassword;
