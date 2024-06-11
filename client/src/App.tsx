import './App.css'
import SideBar from './components/SideBar'
import { DashboardBase } from './components/dashboards/DashboardBase'
import LayoutBase from './components/layouts/LayoutBase'
import LayoutNavbarAndContent from './components/layouts/LayoutNavbarAndContent'

function App() {
  return (
    <>
      <div>
        {/* <SideBar /> */}
        {/* <DashboardBase /> */}
        <LayoutBase />
        {/* <LayoutNavbarAndContent /> */}
      </div>
    </>
  )
}

export default App
