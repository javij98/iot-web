import { MenuTheme } from 'antd'
import { ButtonType } from 'antd/es/button'

export type headerTheme = 'light' | 'dark'

export interface ToggleThemeButtonProps extends React.CSSProperties {
  theme: MenuTheme
  toggleTheme: () => void
  style?: React.CSSProperties
}

export interface ToggleCollapseButtonProps extends Omit<ToggleThemeButtonProps, 'toggleTheme' | 'theme'> {
  collapsed: boolean
  toggleCollapse: () => void
  theme?: MenuTheme
  type?: ButtonType
}
