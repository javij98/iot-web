import React, { useState } from 'react'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Footer } from 'antd/es/layout/layout'

const { Header, Content, Sider } = Layout

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}))

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`,
      }
    }),
  }
})

const LayoutBaseModified: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <>
      <Layout>
        {/* <Header
          style={{
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className='demo-logo' />
          <Menu
            theme='light'
            mode='horizontal'
            defaultSelectedKeys={['1']}
            items={items1}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header> */}
        <Layout>
          <Layout>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              width={200}
              style={{
                background: colorBgContainer,
                paddingRight: 0,
                paddingBottom: 0,
                position: 'static',
                zIndex: 'auto'
              }}
            >
              <Menu
                mode='inline'
                theme='light'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
              />
            </Sider>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  position: 'relative',
                  margin: 0,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  minHeight: 700,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                Bill is a cat.
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
        <Footer
          style={{
            textAlign: 'center',
            left: 0,
            bottom: 0,
            width: '100%',
            color: '#fff',
            backgroundColor: '#4096ff'
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    </>
  )
}

export default LayoutBaseModified
