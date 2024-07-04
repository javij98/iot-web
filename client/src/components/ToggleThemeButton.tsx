import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button, MenuTheme } from 'antd'
import React from 'react';

interface ToggleThemeButtonProps extends React.CSSProperties{
  theme: MenuTheme;
  toggleTheme: () => void;
  style?: React.CSSProperties;
}

export function ToggleThemeButton({ style, theme, toggleTheme }: ToggleThemeButtonProps) {
  return (
    <div className='toggle-theme-btn'>
      <Button style={style} onClick={toggleTheme}>
        {theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
      </Button>
    </div>
  )
}
