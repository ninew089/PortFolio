import React from 'react';

import {Box,useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import lrnportal from '../../assets/img/work/learning-portal.png'
import ocsc from '../../assets/img/work/ocsc.png'

import Card from './component/Card'
export default function Project(props) {
  const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const data = [
        {
            title:' Web Application: OCSC learning Portal  -2020',
            date:' August 2020 - April 2021 | In Progress...',
            name:'Frontend Developer, with Neo S. (Backend Developer)' ,
            img:lrnportal,
        desc: 'Develop an e-Learning Portal platform for the Office of the Civil Service Commission (OCSC). Students which are more than 200k government personnel can find course in an online.',
            tool:'Developed by using TypeScript, ReactJS, Material-UI, .NET Core, MariaDB, and many more.',
            link:"https://learn.ocsc.info/learning-portal/",
            more:"demo"
        },
        {
          title:'Web Application: Personal Interest Evaluation for Thai Government Jobs -2020',
          date:'May 2020 - August 2020',
          name:'Frontend Developer, with Neo S. (Backend Developer)' ,
          img:ocsc,
      desc: 'Develop an Web Application: Personal Interest Evaluation for Thai Government Jobs for the Office of the Civil Service Commission (OCSC). People which can find evaulation for thai goverment jobs in an online.',
          tool:'Developed by using  ReactJS, Material-UI, .NET Core, MariaDB, and many more.',
          link:"https://job-match.ocsc.go.th",
          more:"see more"
      },
    
    ]

  return (
    <>
           
            <Box fontSize={24} my={2} fontWeight={600} >
            Work
               
         </Box>
            <div style={{width:'100%'}}>
              <div style={{ margin: 10 }}>
                  {data.map((item, index) =>
                      <Card key={index}
                          title={item.title}
                          date={item.date}
                          name={item.name}
                          img={item.img}
                          desc={item.desc}
                          link={item.link}
                          more={item.more}/>
                  
                  )}
              
          
       
            
             
         
                    </div>
            </div>
         
 

       
           </>
  );
}


