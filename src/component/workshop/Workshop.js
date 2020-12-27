import React from 'react';

import {Box,Divider} from '@material-ui/core';




export default function About() {

    return (
        <>
        <Box fontSize={24} my={2} fontWeight={600} >
        Workshop
           
     </Box>
            <Box margin={2}>
              <div>
                React workshop 2020 at Chulalongkorn
              </div>
              <div>
              Ionic React 2020 by Skooldio
              </div>

          
            </Box>
            <Divider />
            </>
  );
}
