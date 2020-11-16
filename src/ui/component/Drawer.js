import React, { useState } from 'react';
import { Drawer, Button, Layout, Menu, Avatar ,Divider} from 'antd';
import { FaLine } from "react-icons/fa";
import image from "../../assets/image/img.jpg"
import {NavLink} from 'react-router-dom'
import { UserOutlined, LaptopOutlined, ProjectOutlined,GithubOutlined ,LinkedinOutlined,FacebookOutlined} from '@ant-design/icons';
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
export default function DrawerUi() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
  return (
    <>
         <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
          <Drawer
              title={<FacebookOutlined onClick={ onClose}/>}
 width={'100%'}
        placement="right"
        closable={false}
        onClose={onClose}
              visible={visible}
              
      >
     
                      <div style={{ padding: 10, display: 'inline-flex' }}>
                          <Avatar size={64} icon={<img src={image} alt="" />} />
                          <h3 style={{ color: '001628', paddingTop: 4, paddingLeft: 8, display: 'block' }}>Jittanan
            <div>Jackthreemongkol</div> </h3>
                      </div>
                      <div style={{ color: '001628', padding: '10px 10px 10px 20px' }}>
                          <h3 style={{ color: '001628' }}>Education</h3>
                          <div>traimudomsuksapattanakarn</div>
                          <div>comsci 25</div>
                          <div>chulalongkorn 101</div>
                          <Divider style={{ backgroundColor: '001628' }} />
                          <h3 style={{ color: '001628' }}>Contact</h3>
                          <div style={{ display: 'inline-flex' }}>
           
                              <Avatar size={36} icon={<FaLine size={20} style={{ marginTop: 8 }} />} style={{ marginRight: 4, background: 'white', color: '#001628' }} />
                              <Avatar size={36} icon={<FacebookOutlined />} style={{ marginRight: 4, background: 'white', color: '#001628' }} />
                              <Avatar size={36} icon={<LinkedinOutlined />} style={{ marginRight: 4, background: 'white', color: '#001628' }} />
                              <Avatar size={36} icon={<GithubOutlined />} style={{ marginRight: 4, background: 'white', color: '#001628' }} />
    
                          </div>
                          <h4 style={{ color: '001628' }}>jittanan.jck@gmail.com</h4>
                      </div>
        
                      <Menu
                          mode="inline"
                    
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          style={{ height: 'fit-content', borderRight: 0 }}
                      >

<Menu
                          mode="inline"
                          theme="dark"
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          style={{ height: 'fit-content', borderRight: 0 }}
                      >
                      <Menu.Item key="sub1" icon={<UserOutlined />} >
                      <NavLink to="/" >about me</NavLink></Menu.Item>
                    
                      
                              <Menu.Item key="sub2" icon={<LaptopOutlined />} >  <NavLink to="/work" >Work</NavLink></Menu.Item>
                              <Menu.Item key="sub3" icon={<ProjectOutlined />} >
                      <NavLink to="/project" >Project</NavLink></Menu.Item>
                    
                       
                      </Menu>
                      </Menu>
        
      </Drawer>
    </>
  );
}
