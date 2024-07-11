import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { ToggleCollapseButtonProps } from '../types'

export function ToggleCollapseButton({
  style,
  collapsed,
  toggleCollapse,
  type,
}: ToggleCollapseButtonProps) {
  return (
    <div className='toggle-theme-btn'>
      <Button style={style} onClick={toggleCollapse} type={type}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  )
}
