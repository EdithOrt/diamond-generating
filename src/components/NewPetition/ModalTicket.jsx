/* import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, Typography } from '@material-ui/core';

function AlertDialog({id, open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='lg'
      >
        <Box style={{width:'646px', height:'359px'}}>
          <DialogTitle id="alert-dialog-title" style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
            <Typography color='primary'>
              ¡Muchas gracias!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <Typography style={{color:'#616167'}}>
                Se envió  tu  solicitud  satisfactoriamente
              </Typography>
              <Typography style={{color:'#616167'}}>
                Tu número de solicitud es
              </Typography>
              <Box style={{backgroundColor:'#F4FAFF', width:'339px', height:'102px', marginTop:'15px', borderRadius:'20px', marginBottom:'20px', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Typography style={{color:'#616167'}}>
                  {id} 19237hjsb1982jshsu
                </Typography>
              </Box>
              <Typography variant='overline' style={{color:'#616167'}}>
                  Puedes darle seguimiento desde tu bandeja de solicitudes. 
              </Typography>
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
  );
} 
 
export default AlertDialog;*/

import React from 'react';

import { Box, Typography } from '@material-ui/core';

function FinishedPetition({ id, open, setOpen }) {

  return (

    <Box style={{ width: '646px', height: '359px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Typography color='primary'>
          ¡Muchas gracias!
            </Typography>
      </div>
      <div id="alert-dialog-description" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography style={{ color: '#616167' }}>
          Se envió  tu  solicitud  satisfactoriamente
              </Typography>
        <Typography style={{ color: '#616167' }}>
          Tu número de solicitud es
              </Typography>
        <Box style={{ backgroundColor: '#F4FAFF', width: '339px', height: '102px', marginTop: '15px', borderRadius: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography style={{ color: '#616167' }}>
            {id} 19237hjsb1982jshsu
                </Typography>
        </Box>
        <Typography variant='overline' style={{ color: '#616167' }}>
          Puedes darle seguimiento desde tu bandeja de solicitudes.
              </Typography>
      </div>
    </Box>

  );
}

export default FinishedPetition;