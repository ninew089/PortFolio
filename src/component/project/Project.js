import React from 'react';

import { AppBar,Toolbar,Box, Grid,Divider,Slide,useMediaQuery ,useScrollTrigger,CssBaseline,Typography} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import lrnportal from '../../assets/img/work/learning-portal.png'
import ocsc from '../../assets/img/work/ocsc.png'
import reactnative from '../../assets/img/project/reactnative.png'
import hostel from '../../assets/img/project/hostel.png'
import pop from '../../assets/img/project/popbus.png'
import camp from '../../assets/img/project/camp.png'
import travel from '../../assets/img/project/travel.png'
import ywc from '../../assets/img/project/ywc.png'

import Card from './component/Card'
export default function Project(props) {
  const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const data = [
        {
            title:'Mobile App',
            date:'December 2020',
            name:'Course Goal' ,
            img:reactnative,
            desc:'Course Goal is develop websites using ReactNative .',
            link:"https://github.com/ninew089/ReactNativeApp_CourseGoal/",
            more:"see on Github..."
        },
        {
            title:'Web Developer',
            date:'November 2020',
            name:'HalfHalf Website' ,
            img:ywc,
            desc:"HalfHalf Website is Design and develop websites using React.js and Antdesign,including responsive website , filter,  and prototype-based programming.",
            link:"https://ywc18verceltest.ninew089.vercel.app/",
            more:"demo site"
        },
        {
            title:'Web Developer',
            date:'November 2020',
            name:'Travel website' ,
            img:travel,
            desc:'Developed web app by using React.js, Material UI,Json server and prototype-based programming.',
            link:"https://github.com/ninew089/frontend-assigment",
            more:"see more on Github..."
        },
        {
            title:'Web Developer',
            date:'November 2020',
            name:'Hostel mangement' ,
            img:hostel,
            desc:' Design and develop websites using React.js ,Redux and Mock Api sever from Postman.',
            link:"https://frontend-test-nine.vercel.app/",
            more:"see more on Github..."
        },
        {
            title:'UserInterface',
            date:'October 2020',
            name:'Camp Info website' ,
            img:camp,
            desc:'Design using Figma',
            link:"https://www.figma.com/file/lJCGfHGbinMzvJflhnw4jb/ytw18?node-id=0%3A1",
            more:"demo"
        },
        {
            title:'UserInterface',
            date:'January 2020',
            name:'POP BUS Application' ,
            img:pop,
            desc:"Collaborated with a team of 7 people to performed ideation, brainstorming, and wireframing. Created numerous mobile app prototypes of varying fidelity to test assumptions and concepts.Using Figma",
            link:"https://www.figma.com/file/9slKJZfXssPSfhdo5HAbD6/POP-BUS-APP?node-id=0%3A1",
            more:"demo"
        },
    ]

  return (
    <>
           
            <Box fontSize={24} my={2} fontWeight={600} >
              Project
               
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

