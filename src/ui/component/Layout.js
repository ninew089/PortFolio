import { Layout, Menu, Breadcrumb,Avatar,Divider } from 'antd';
import { UserOutlined, LaptopOutlined, ProjectOutlined,GithubOutlined ,LinkedinOutlined,FacebookOutlined} from '@ant-design/icons';
import { FaLine } from "react-icons/fa";
import image from "../../assets/image/img.jpg"
import 'antd/dist/antd.css'
import { useMediaQuery } from 'react-responsive'
import Route from './Router'
import Drawer from './Drawer'
import {NavLink} from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider ,Footer} = Layout;

export default function LayoutUi() {
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (

      <Layout>
        <Header className="header">
        {isMobile && <Drawer/>}
              <h3 style={{ color: 'white', paddingTop: 4, paddingLeft: 8, display: 'block' }}>Portfolio</h3>
            
        </Header>
          <Layout>
              {!isMobile &&
                  <Sider width={240} className="site-layout-background">
                      <div style={{ padding: 10, display: 'inline-flex' }}>
                          <Avatar size={64} icon={<img src={image} alt="" />} />
                          <h3 style={{ color: 'white', paddingTop: 4, paddingLeft: 8, display: 'block' }}>Jittanan
            <div>Jackthreemongkol</div> </h3>
                      </div>
                      <div style={{ color: 'white', padding: '10px 10px 10px 20px' }}>
                          <h3 style={{ color: 'white' }}>Education</h3>
                          <div>traimudomsuksapattanakarn</div>
                          <div>comsci 25</div>
                          <div>chulalongkorn 101</div>
                          <Divider style={{ backgroundColor: 'white' }} />
                          <h3 style={{ color: 'white' }}>Contact</h3>
                          <div style={{ display: 'inline-flex' }}>
           
                              <Avatar size={36} icon={<FaLine size={20} style={{ marginTop: 8 }} />} style={{ marginRight: 4, background: '#001628', color: '#e5f2ff' }} />
                              <Avatar size={36} icon={<FacebookOutlined />} style={{ marginRight: 4, background: '#001628', color: '#e5f2ff' }} />
                              <Avatar size={36} icon={<LinkedinOutlined />} style={{ marginRight: 4, background: '#001628', color: '#e5f2ff' }} />
                              <Avatar size={36} icon={<GithubOutlined />} style={{ marginRight: 4, background: '#001628', color: '#e5f2ff' }} />
    
                          </div>
                          <h4 style={{ color: 'white' }}>jittanan.jck@gmail.com</h4>
                      </div>
        
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
                  </Sider>
              }
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: window.screen.height,
              }}
            >
         <Route/>
            </Content>
        </Layout>

      </Layout>
      <Footer style={{background:'black'}}>Hello</Footer>
      </Layout>
  );
}

