import React from 'react';
import { Box,Divider } from '@material-ui/core';
import reactnative from '../../../assets/img/project/reactnative.png'

export default function Project() {


  return (
    <>

                  <Box fontSize={18} my={2} fontWeight={600} >
                    Mobile App 

            </Box>

                    <img src={reactnative} alt="" height="100%" width="80%" style={{ objectFit: 'cover' }} />
                    <Box fontSize={16} my={2} fontWeight={600}  color={'#aaa'}>
                     December 2020
           </Box>
                    <Box fontSize={16} my={2} fontWeight={600} >
                      Course Goal
           </Box>
                    <div>
                    Course Goal is develop websites using ReactNative .

                    </div>
                  
           <Box fontSize={16} my={2} fontWeight={600}  color={'#2d6bf9'}>
           <a href="https://github.com/ninew089/ReactNativeApp_CourseGoal/"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>see on Github...</a>
           </Box>
                    <Divider />        
    
           </>
  );
}

