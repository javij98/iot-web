import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Divider, Flex, Layout, Menu, MenuTheme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Header } from 'antd/es/layout/layout'
import { useState } from 'react'
import '../App.css'
import { headerItems, siderItems } from '../constants'
import { HeaderLogo } from './HeaderLogo'
import { ToggleThemeButton } from './ToggleThemeButton'
import Title from 'antd/es/typography/Title'

export function SideBarMenu() {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState<MenuTheme>('light')

  // Collapse the sidebar
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const backgroundColorHeader = theme === 'light' ? '#fff' : '#131629'

  const titleTheme = theme === 'light' ? '#000000' : '#fff'

  // If you want to change the button type when theme is switched
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
          top: 0,
          zIndex: 1,
          alignContent: 'center',
        }}
      >
        <HeaderLogo />
        <Title
          style={{
            color: titleTheme,
            marginRight: '10px',
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
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            borderRight: 0,
            position: 'static',
            left: 0,
            top: 0,
            bottom: 0,
          }}
          width={300}
          theme={theme}
          collapsible
          onCollapse={toggleCollapsed}
          collapsed={collapsed}
        >
          {/* <Button
            type='primary'
            ghost
            onClick={toggleCollapsed}
            style={{ marginBottom: 0, marginTop: 16, marginLeft: 9 }}
          >
            <Flex gap='small'>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Flex>
          </Button> */}
          <ToggleThemeButton
            style={{ marginBottom: 0, marginTop: 16, marginLeft: 9 }}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <Divider style={{ margin: '16px 0' }} />
          <Menu
            className='sidebar'
            items={siderItems}
            mode='inline'
            theme={theme} // This is not necessary because it uses sider's theme
            inlineCollapsed={collapsed}
          ></Menu>
        </Sider>
      </Layout>
    </Layout>
  )
}
