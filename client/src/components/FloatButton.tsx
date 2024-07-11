import React from 'react'
import { FloatButton } from 'antd'

export const FloatButtonMenu: React.FC = () => (
  <FloatButton
    style={{ top: 70, left: 20 }}
    onClick={() => console.log('onClick')}
  />
)
