import './App.css'
import { MenuList } from './components/SideBarMenu'
import SideBar from './components/SideBar'
import { DashboardBase } from './components/dashboards/DashboardBase'
import LayoutBaseModified from './components/layouts/LayoutBaseModified'
import LayoutNavbarAndContent from './components/layouts/LayoutNavbarAndContent'

function App() {
  return (
    <>
      <div>
        {/* <SideBar /> */}
        {/* <DashboardBase /> */}
        {/* <LayoutBaseModified /> */}
        {/* <LayoutNavbarAndContent /> */}
        <MenuList />
      </div>
    </>
  )
}

export default App
