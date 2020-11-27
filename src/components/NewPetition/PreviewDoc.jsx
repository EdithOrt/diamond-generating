import { Box, Typography } from '@material-ui/core';
import React from 'react';
import AppBarHeader from '../layout/AppBarHeader';
import Menu from '../layout/Menu'
import Doc from './Doc';
import { Link } from 'react-router-dom'
import SendIcon from '@material-ui/icons/Send';
import ModalTicket from '../NewPetition/ModalTicket'

const PreviewDoc = ({id}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    return ( 
        <Box style={{display:'flex'}}>
            <Menu />
            <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='＜ Previsualizador de formato' />
                <Box style={{display:'flex', justifyContent:'space-between', marginTop:'40px', marginLeft:'100px', marginRight:'100px'}}>
                    <Link style={{textDecoration:'none', color:'white', backgroundColor:'#ABD9FF', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'18px', paddingRight:'18px', borderRadius:'47px'}}>
                        Cancelar
                    </Link>
                    <Link onClick={handleClickOpen} style={{textDecoration:'none', color:'white', backgroundColor:'#1D376C', paddingTop:'8px', paddingBottom:'8px', paddingLeft:'22px', paddingRight:'22px', borderRadius:'47px', display:'flex'}}>
                        <SendIcon style={{marginRight:'5px'}} />
                        Enviar
                    </Link>
                </Box>
                <Box style={{display:'flex', flexDirection:'column', alignItems: 'center', marginTop:'-5px'}}>
                    <Box style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
                        <Typography color="primary" style={{marginBottom:'18px'}}>
                            Previsualizador de formato
                        </Typography>
                        <Typography color="secondary" style={{marginBottom:'18px'}}>
                            Este formato no tiene valor, enviar al área de legal para  proceder con su  solicitud.
                        </Typography>
                    </Box>
                    <Doc />
                </Box>
                <ModalTicket id={id} open={open} setOpen={setOpen} />
            </Box>
        </Box>
     );
}
 
export default PreviewDoc;