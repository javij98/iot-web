import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Divider, Layout, Menu, MenuTheme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Header } from 'antd/es/layout/layout'
import { useState } from 'react'
import '../App.css'
import { headerItems, siderItems } from '../constants'
import { HeaderLogo } from './HeaderLogo'
import { ToggleThemeButton } from './ToggleThemeButton'
import Title from 'antd/es/typography/Title'
import { headerTheme } from '../types'

export function SideBarMenu() {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState<MenuTheme>('light')
  const [headerTheme, setheaderTheme] = useState<headerTheme>('light')

  // Collapse the sidebar
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  // Toggle the theme
  // const toggleTheme = (value: boolean) => {
  //   setTheme(value ? 'dark' : 'light')
  // }
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center',  }}>
        <HeaderLogo />
        <Title
          style={{ color: 'white', marginRight: '10px', marginBottom: '0px' }}
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
            // position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
          width={300}
          theme={theme}
          // collapsible
          collapsed={collapsed}
        >
          <Button
            type='text'
            onClick={toggleCollapsed}
            style={{ marginBottom: 0, marginTop: 16, marginLeft: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            className='sidebar'
            items={siderItems}
            mode='inline'
            theme={theme} // This is not necessary because it uses sider's theme
            inlineCollapsed={collapsed}
          >
          </Menu>
          <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
        </Sider>
      </Layout>
    </Layout>
  )
}
