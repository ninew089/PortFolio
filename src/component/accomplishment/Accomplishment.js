import React from 'react';

import { Box, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export default function Accomplishments() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
      <>
 
 <Box fontSize={24} my={2} fontWeight={600} >
                  Accomplishments
                   
         </Box>
         <Box style={{margin:'10px 10px 10px 100px'}}>
                  <div>
                    Algorithm Design
                  </div>
                  <div>
                    Computer Ethics
                  </div>
                  <div>
                    Computer Programming
                  </div>
                  <div>
                    Communication Data</div> 
                  <div>
                    Structures Database
                  </div> 
                  <div>
                    Information Systems</div><div>
                    Operating Systems </div>
                  <div>
                    Programming Language
                  </div> <div>
                    Requirements Engineering 
                  </div>
                  <div>
                    Software Engineering 
                  </div> 
                  <div>
                    System Analysis
                  </div> 
                  <div>
                    Theory of Computation
                  </div>
                  <div>
                  User Interface Design
                  </div> 
            </Box>
  
  </>
  );
}
