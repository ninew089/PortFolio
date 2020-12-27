import React from 'react';
import { Box,Divider } from '@material-ui/core';
import ywc from '../../../assets/img/project/ywc.png'

export default function Project(props) {


  return (
    <>

<Box fontSize={18} my={2} fontWeight={600} >
                    Web Developer

            </Box>

                    <img src={ywc} alt="" height="100%" width="80%" style={{ objectFit: 'cover' }} />
                    <Box fontSize={16} my={2} fontWeight={600}  color={'#aaa'}>
                     November 2020
           </Box>
                    <Box fontSize={16} my={2} fontWeight={600} >
                      HalfHalf Website
           </Box>
                    <div>
                  HalfHalf Website is Design and develop websites using React.js and Antdesign,including responsive website , filter,  and prototype-based programming.

                    </div>
                  
           <Box fontSize={16} my={2} fontWeight={600}  color={'#2d6bf9'}>
           <a href="https://ywc18verceltest.ninew089.vercel.app/"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>demo site</a>
           </Box>
                    <Divider />      
    
           </>
  );
}

