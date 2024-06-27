import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button, MenuTheme } from 'antd'

interface ToggleThemeButtonProps {
  theme: MenuTheme;
  toggleTheme: () => void;
}

export function ToggleThemeButton({ theme, toggleTheme }: ToggleThemeButtonProps) {
  return (
    <div className='toggle-theme-btn'>
      <Button onClick={toggleTheme}>
        {theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
      </Button>
    </div>
  )
}
