import { Button, Divider, Menu, MenuProps, MenuTheme, Switch } from 'antd'
import { HomeIcon, ArrowDownRightIcon } from '@heroicons/react/24/outline'
import {
  AppstoreOutlined,
  HomeTwoTone,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import '../App.css'
import { items } from '../constants'
import { useState } from 'react'

export function MenuList() {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState<MenuTheme>('light');

  // Collapse the sidebar
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  // Change the theme
  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div style={{ width: 256 }}>
      <Button
        type='primary'
        onClick={toggleCollapsed}
        style={{ marginBottom: 16, marginTop: 16, marginLeft: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Divider type="vertical" />
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <Menu
        items={items}
        mode='inline'
        theme={theme}
        defaultOpenKeys={['1']} // default opened keys
        inlineCollapsed={collapsed}
      >
      </Menu>
    </div>
  )
}
