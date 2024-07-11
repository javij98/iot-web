import {
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  Flex,
  Layout,
  Menu,
  MenuTheme,
  Row,
  theme,
} from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { useState } from 'react'
import '../App.css'
import { headerItems, siderItems } from '../constants'
import { HeaderLogo } from './HeaderLogo'
import { ToggleThemeButton } from './ToggleThemeButton'
import Title from 'antd/es/typography/Title'
import { Card } from '@tremor/react'
import { AreaChartUsageExample } from './charts/Areachart'
import { DashboardBase } from './dashboards/DashboardBase'
import { FloatButtonMenu } from './FloatButton'
import { ToggleCollapseButton } from './ToggleCollapseButton'

/**
 * @TODO:  Justificar el boton ToggleThemeButton a la iquierda
 */

export function SideBarMenu() {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState<MenuTheme>('light')
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  // Collapse the sidebar
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const ButtonsWidth = collapsed ? '55px' : '300px'

  const backgroundColorHeader = theme === 'light' ? '#fff' : '#131629'

  const titleTheme = theme === 'light' ? '#000000' : '#fff'

  // ⬇⬇⬇ If you want to change the button type when theme is switched ⬇⬇⬇
  // const sidebarToggleButton = theme === 'light' ? 'text' : 'primary'

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: backgroundColorHeader,
          position: 'sticky',
          width: '100%',
          padding: 10,
          top: 0,
          zIndex: 3,
          alignContent: 'center',
          marginLeft: 0,
        }}
      >
        <HeaderLogo />
        <Title
          style={{
            color: titleTheme,
            marginRight: '10px',
            marginLeft: '0px',
            marginBottom: '0px',
          }}
          level={4}
        >
          IoT Web
        </Title>
        <Menu
          theme={theme}
          mode='horizontal'
          defaultSelectedKeys={['1']}
          items={headerItems}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: backgroundColorHeader,
          }}
          subMenuOpenDelay={0.5} // TODO: may be changed
        />
      </Header>
      <Layout style={{ minHeight: '100vh' }}>
        {/* <div> */}

        <Sider
          style={{
            overflow: 'auto',
            height: /* collapsed ? '79vh' : '84.9vh' */ '100vh',
            borderRight: 0,
            position: 'sticky',
            left: 0,
            top: 0,
            bottom: 0,
            maxWidth: 500,
            width: '300px',
            // marginTop: 60,
          }}
          width={300}
          theme={theme}
          collapsible
          trigger={null}
          onCollapse={toggleCollapse}
          collapsed={collapsed}
        >
          {/* <Divider style={{ margin: '8px 0' }} /> */}
          <Menu
            className='sidebar'
            items={siderItems}
            mode='inline'
            theme={theme} // This is not necessary because it uses sider's theme
            inlineCollapsed={collapsed}
            style={{ maxHeight: '500', backgroundColor: backgroundColorHeader }}
          ></Menu>
          <ToggleThemeButton
            theme={theme}
            toggleTheme={toggleTheme}
            style={{ zIndex: 5, bottom: 10, position: 'fixed', marginLeft: 16 }}
          />
        </Sider>
        {/* </div> */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            zIndex: '2',
          }}
        >
          <Header
            style={{
              padding: 0,
              marginLeft: 0,
              backgroundColor: 'transparent',
              height: 35,
            }}
          >
            <ToggleCollapseButton
              style={{ marginTop: 5, position: 'fixed', zIndex: 5 }}
              collapsed={collapsed}
              toggleCollapse={toggleCollapse}
              type='text'
            />
          </Header>
          <Content
            style={{ padding: '0 28px', overflowY: 'auto', zIndex: '1' }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Option 1</Breadcrumb.Item>
            </Breadcrumb>
            <div>
              Content
              {/* <AreaChartUsageExample /> */}
              <DashboardBase />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              position: 'sticky',
              alignItems: 'end',
              backgroundColor: 'ButtonShadow',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </div>
      </Layout>
    </Layout>
  )
}
