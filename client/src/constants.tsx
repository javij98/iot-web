import {
  HomeOutlined,
  LaptopOutlined,
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { MenuProps } from 'antd';

// Type defined in Ant Design library
type MenuItem = Required<MenuProps>['items'][number]

// Sidebar items
const siderItems: MenuItem[] = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '2',
    icon: /* <AppstoreOutlined /> */<LaptopOutlined />,
    label: 'Devices',
    children: [
      { key: '21', label: 'Device 1' },
      { key: '22', label: 'Device 2' },
      {
        key: '23',
        label: 'Submenu',
        children: [
          { key: '231', label: 'DeviceOption 1' },
          { key: '232', label: 'DeviceOption 2' },
          { key: '233', label: 'DeviceOption 3' },
        ],
      },
      {
        key: '24',
        label: 'Submenu 2',
        children: [
          { key: '241', label: 'Option 1' },
          { key: '242', label: 'Option 2' },
          { key: '243', label: 'Option 3' },
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Navigation Three',
    children: [
      { key: '31', label: 'Option 1' },
      { key: '32', label: 'Option 2' },
      { key: '33', label: 'Option 3' },
      { key: '34', label: 'Option 4' },
    ],
  },
]

// Header items
const headerItems: MenuItem[] = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Dashboard',
    children: [
      { key: '11', label: 'Option 1' },
      { key: '12', label: 'Option 2' },
      { key: '13', label: 'Option 3' },
      { key: '14', label: 'Option 4' },
    ],
  },
  {
    key: '2',
    icon: <LaptopOutlined />,
    label: 'Devices',
    children: [
      { key: '21', label: 'Option 1' },
      { key: '22', label: 'Option 2' },
      {
        key: '23',
        label: 'Submenu',
        children: [
          { key: '231', label: 'Option 1' },
          { key: '232', label: 'Option 2' },
          { key: '233', label: 'Option 3' },
        ],
      },
      {
        key: '24',
        label: 'Submenu 2',
        children: [
          { key: '241', label: 'Option 1' },
          { key: '242', label: 'Option 2' },
          { key: '243', label: 'Option 3' },
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Navigation Three',
    children: [
      { key: '31', label: 'Option 1' },
      { key: '32', label: 'Option 2' },
      { key: '33', label: 'Option 3' },
      { key: '34', label: 'Option 4' },
    ],
  },
]

export { headerItems, siderItems };
