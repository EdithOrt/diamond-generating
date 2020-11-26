import { Box } from '@material-ui/core';
import React from 'react';
import useData from '../../Assets/useData'
import image from '../../Assets/images/rua.jpg'

const Doc = () => {
    const data = useData();
    return ( 
        <Box style={{width:'700px', display:'flex', flexDirection:'column', alignItems:'center', boxShadow:'0px 1px 8px 1px #616167', height:'50vh', padding:'25px', overflowY: 'scroll'}}>
            <img src={image} />
        </Box>
     );
}
 
export default Doc;