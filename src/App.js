import React from 'react';
import PropTypes from 'prop-types';


import { AppBar,Toolbar,Box, Grid,Divider,Slide,useMediaQuery ,useScrollTrigger,CssBaseline,Typography} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css'
import lrnportal from './assets/img/work/learning-portal.png'
import ocsc from './assets/img/work/ocsc.png'
import ywc from './assets/img/project/ywc.png'
import hostel from './assets/img/project/hostel.png'
import pop from './assets/img/project/popbus.png'
import camp from './assets/img/project/camp.png'
import travel from './assets/img/project/travel.png'
import profile from './assets/img/profile/img.JPG'
import resume from './assets/pdf/resume_intern.pdf'
import transcript from './assets/pdf/transcript.pdf'
import cv from './assets/pdf/CV.pdf'


const THEME = createMuiTheme({
  typography: {
    fontFamily: ['Work Sans'].join(',')
  }
});
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <ThemeProvider theme={THEME}>

      <div style={{ display: 'flex' ,  position: 'absolute'}}>
      <div style={{background:'#f5f5f5',color:'#222222'}}></div>
      <CssBaseline />

        <AppBar style={{background:'#f5f5f5',color:'#222222'}} elevation={0}>
          <Toolbar>
              <Typography variant="h6" style={{flexGrow:1}}>jittanan j. </Typography>
         
          </Toolbar>
        </AppBar>

               
        <Grid container direction="row" justify="center">
          
          <Grid items xs={12} sm={12} md={5} lg={5} >
         
        
            <div style={{ margin: 100, position: matches?'fixed':'none',float:'left',width:400 }}>
            <Box fontSize={24} fontWeight={900} >
              About me
         </Box>
            <Box fontSize={16} my={2}fontWeight={500}>
                Hi,My name is 
         </Box>
              
              <Grid container direction="row" alignItems="center" justify="center" spacing={6}>
              <img src={profile} alt="" height="180px" width="180px" style={{ borderRadius: 1000, textAlign:'center'}} />
            </Grid>
        
         <Box fontSize={24} fontWeight={900} margin={'20px 100px 10px 0px'}>
              Jittanan Jackthreemongkol.
         </Box>
         <Box fontSize={14} fontWeight={400}>
                &nbsp; &nbsp; &nbsp;I am a fourth-year computer science student at Chulalongkorn University in Bangkok. I am a self-taught frontend developer .
                Currently looking for internship position in the industry in which to improve computer skill and expand work experience. If you are interested in me, feel free to contact!
         </Box>
         <Box fontSize={18} my={2} fontWeight={600} >
                Contract
              </Box>
              <Box fontSize={14} my={2} fontWeight={600} >
              <div>
               email: jittanan.jck@gmail.com
</div>
                <div>
                Tel: 085-491-5651
                </div>
                <div>
                Line: new.jck
                </div>
                <div style={{ display: 'inline-flex' }}>
                Github : <a href="https://github.com/ninew089/"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>ninew089</a>
                </div>
                <div>
                  Linkin :
                  
                  <a href="https://www.linkedin.com/in/jittanan-jkn-7468b3157/"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>@jittanan.jkn</a>
</div>
              
              </Box>
              <Box fontSize={18} my={2} fontWeight={600} >
                Download
              </Box>
         <Box fontSize={18} my={2} fontWeight={600} >
                <div style={{ display: 'inline-flex' }}>
                  <div style={{marginRight:10}}>
                  <a href={resume} target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>resume</a>
                  </div>
                  <div style={{marginRight:10}}>
                  <a href={transcript} target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>transcript</a>
                  </div>
                  <div>
                  <a href={cv} target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>cv</a>
                  </div>
                  
             </div>
                 
         </Box> 
   
  
              </div>
          </Grid>
          <Grid items xs={12} sm={12} md={7} lg={7} >
            <section style={ {   isolation: 'isolate',maxWidth: '100%',overflowX: 'hidden',margin:10}}>
          <Box  style={{margin:matches?"100px 0px 0px 0px":"0px 100px 100px 100px"}}>
                <div>
                <Box fontSize={24} my={2} fontWeight={600} >
              Education
               
         </Box> 
         </div>
           
              <Box style={{margin:10}}>
                <div>
                2017 - Present | Expected: May 2021
                </div>
       
                 <strong>
                 B.S. Computer Science
                 </strong>
                <div>
                Chulalongkorn University (Bangkok, Thailand)
      </div>
                
                <div>
                2010 - 2016    
</div>
     
                <strong>
                Traimudomsuksapattanakarn (Bangkok, Thailand)
                </strong>
               



            </Box>
            <Box fontSize={24} my={2} fontWeight={600} >
             Skills
               
         </Box>
                <Box style={{ margin: 20 }}>
                <div>
                  React.js
                  </div>
                  <div>
                  Javascript
                  </div>
                  <div>
                  HTML
                  </div>
                  <div>
                  CSS
                  </div>
                  <div>
                  Python
                  </div>
                  <div>
                  Java
                    </div>
                    <div>
                  Figma
                    </div>
            </Box>
            <Divider/>
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
 
                <Divider/>
           
            <Box fontSize={24} my={2} fontWeight={600} >
              Project
               
         </Box>
            <div style={{width:'100%'}}>
       
                  <div style={{ margin: 10 }}>
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
                    <Box fontSize={18} my={2} fontWeight={600} >
                    Web Developer

            </Box>

                    <img src={travel} alt="" height="100%" width="80%" style={{ objectFit: 'cover' }} />
                    <Box fontSize={16} my={2} fontWeight={600}  color={'#aaa'}>
                     November 2020
           </Box>
                    <Box fontSize={16} my={2} fontWeight={600} >
                      Travel website
           </Box>
                    
                    <div>
                    Developed web app by using React.js, Material UI,Json server and prototype-based programming.
                    </div>
           <Box fontSize={16} my={2} fontWeight={600}  color={'#2d6bf9'}>
           <a href="https://github.com/ninew089/frontend-assigment"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>see more on Github...</a>
           </Box>
                    <Divider />
                 
                  <Box fontSize={18} my={2} fontWeight={600} >
                    Web Developer

            </Box>

                    <img src={hostel} alt="" height="100%" width="80%" style={{ objectFit: 'cover' }} />
                    <Box fontSize={16} my={2} fontWeight={600}  color={'#aaa'}>
                     November 2020
           </Box>
                    <Box fontSize={16} my={2} fontWeight={600} >
                      Hostel mangement
           </Box>
                    
                    <div>
                    Design and develop websites using React.js ,Redux and Mock Api sever from Postman.
                    </div>
           <Box fontSize={16} my={2} fontWeight={600}  color={'#2d6bf9'}>
           <a href="https://frontend-test-nine.vercel.app/"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>demo site</a>
           </Box>
                    <Divider />
                    <Box fontSize={18} my={2} fontWeight={600} >
            UserInterface
            </Box>
                    <img src={camp} alt="" height="100%" width="80%" style={{ objectFit: 'cover' }} />
                    <Box fontSize={16} my={2} fontWeight={600}  color={'#aaa'}>
                     October 2020
           </Box>
                    <Box fontSize={16} my={2} fontWeight={600} >
                      Camp Info website
           </Box>
                    <div>
                    Design using Figma

                    </div>
                 
                    
           <Box fontSize={16} my={2} fontWeight={600}  color={'#2d6bf9'}>
           <a href="https://www.figma.com/file/lJCGfHGbinMzvJflhnw4jb/ytw18?node-id=0%3A1"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>demo </a>
           </Box>
           <Divider/>
              <Box fontSize={18} my={2} fontWeight={600} >
              UserInterface

            </Box>
                    <img src={pop} alt="" height="100%" width="80%" style={{ objectFit: 'cover' }} />
                    <Box fontSize={16} my={2} fontWeight={600}  color={'#aaa'}>
                     January 2020
           </Box>
                    <Box fontSize={16} my={2} fontWeight={600} >
                    POP BUS Application
           </Box>
                    <div>
                    Collaborated with a team of 7 people to performed ideation, brainstorming, and wireframing. Created
 numerous mobile app prototypes of varying fidelity to test assumptions and concepts.

                    </div>
                    <div>
                      Using Figma
                    </div>
                    
           <Box fontSize={16} my={2} fontWeight={600}  color={'#2d6bf9'}>
           <a href="https://www.figma.com/file/9slKJZfXssPSfhdo5HAbD6/POP-BUS-APP?node-id=0%3A1"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>demo </a>
           </Box>
           <Divider/>
         
                    </div>
            </div>
            <Box fontSize={24} my={2} fontWeight={600} >
                  Work
                   
         </Box>
 

         <Box fontSize={18} my={2} fontWeight={600} >
         Web Application: OCSC learning Portal  -2020

            </Box>
            <div style={{width:'100%'}}>
                  <img src={lrnportal} alt="" height="100%" width="80%" style={{ objectFit: 'cover' }} />
                  <Box fontSize={16} my={2} fontWeight={600}  color={'#aaa'}>
                  August 2020 - April 2021 | In Progress...
           </Box>
                    <Box fontSize={16} my={2} fontWeight={600} >
                    Frontend Developer, with Neo S. (Backend Developer)
           </Box>
                    <div>
                    &nbsp; &nbsp; &nbsp;Develop an e-Learning Portal platform for the Office of the Civil Service Commission (OCSC). Students which are more than 200k government personnel can find course in an online.

                    </div>
                    <div>
                     Developed by using TypeScript, ReactJS, Material-UI, .NET Core, MariaDB, and many more.
                    </div>
                    
           <Box fontSize={16} my={2} fontWeight={600}  color={'#2d6bf9'}>
           <a href="http://54.151.212.211/learning-portal"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>demo site</a>
           </Box>
           <Divider/>
            <Box fontSize={18} my={2} fontWeight={600} >
                 
                    Web Application: Personal Interest Evaluation for Thai Government Jobs -2020

            </Box>
                  <img src={ocsc} alt="" height="100%" width="80%" style={{ objectFit: 'cover' }} />
                  <Box fontSize={16} my={2} fontWeight={600}  color={'#aaa'}>
                  May 2020 - August 2020
           </Box>
                    <Box fontSize={16} my={2} fontWeight={600} >
                    Frontend Developer, with Neo S. (Backend Developer)
           </Box>
                    <div>
                    &nbsp; &nbsp; &nbsp;Develop an  Web Application: Personal Interest Evaluation for Thai Government Jobs for the Office of the Civil Service Commission (OCSC). People which are more than 200k government personnel can find evaulation for thai goverment jobs in an online,

                    </div>
                    <div>
                     Developed by using  ReactJS, Material-UI, .NET Core, MariaDB, and many more.
                    </div>
                    
           <Box fontSize={16} my={2} fontWeight={600}  color={'#2d6bf9'}>
           <a href="https://job-match.ocsc.go.th"target="blank" style={{color:'#2d6bf9',textDecoration:'none'}}>see more...</a>
           </Box>
           <Divider/>
            </div>
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
                <Divider/>
<Box fontSize={24} my={2} fontWeight={600} >
                  Certificate
                   
         </Box>
         <Box margin={2}>
            <Box>
              Front-End Web Development with React (with Honors)  by Coursera 2020   </Box>
              <Box>
HTML,CSS and Javascript for Web Developers by Coursera 2020
</Box>
<Box>
Mastering Web Development with React by Skooldio 2020
</Box>
<Box>
Visual Elements of User Interface Design  by Coursera2020
</Box>
<Box>
                    Intro to Data Science from Skooldio 2020

            </Box>
                  </Box>
        
              </Box>
              </section>
            </Grid>
            </Grid>

      </div>
      </ThemeProvider>
  );
}

