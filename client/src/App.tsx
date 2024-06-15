import './App.css'
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
        <LayoutBaseModified />
        {/* <LayoutNavbarAndContent /> */}
      </div>
    </>
  )
}

export default App
