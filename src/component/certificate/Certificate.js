import React from 'react';

import {Box, } from '@material-ui/core';


import Link from './component/Link'
export default function Project(props) {

    const data = [
        {
            text:'Front-End Web Development with React (with Honors)  by Coursera 2020',
            link:"https://www.coursera.org/account/accomplishments/certificate/BYTV9WRVQG8J",
          
        },
        {
            text:'HTML,CSS and Javascript for Web Developers by Coursera 2020',
            link:"https://www.coursera.org/account/accomplishments/certificate/3B7MG3GY2H94",
          
        },
        {
            text:'Mastering Web Development with React by Skooldio 2020',
            link:"https://www.skooldio.com/certificate/5e959bfe-aab7-4e29-9920-8bf8f96ffe03",
          
        },
        {
            text:'Mastering Web Development with React by Skooldio 2020',
            link:"https://www.coursera.org/account/accomplishments/certificate/W8KQ3LXYLZFY",
          
        },
        {
            text:'Intro to Data Science from Skooldio 2020',
            link:"https://www.skooldio.com/certificate/8c6d32ef-26ac-492f-ab11-18e49b5bcc81",
          
        },
    
    ]

  return (
    <>
           
            <Box fontSize={24} my={2} fontWeight={600} >
            Certificate
               
         </Box>
            <div style={{width:'100%'}}>
              <div style={{ margin: 10 }}>
                  {data.map((item, index) =>
                      <Link key={index}
                          text={item.text}
                          link={item.link}
                       />
                  
                  )}
              
          
       
            
             
         
                    </div>
            </div>
         
 

       
           </>
  );
}

                