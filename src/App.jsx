import Dashboard from "./components/Dashboard";
import SideBar, { SidebarItem } from "./components/sideBar";
import { 
  LayoutDashboard, 
  LayoutList, 
  CirclePlus, 
  UtensilsCrossed, 
  Sheet, 
  Users, 
  Archive, 
  Refrigerator, 
  ChartSpline, 
  Settings, 
  LogOut 
} from 'lucide-react'

function App() {
  const sidebarItems = [
    { icon: <LayoutDashboard size={25} />, text: "Dashboard", active: true },
    { icon: <LayoutList size={25} />, text: "Orders" },
    { icon: <CirclePlus size={25} />, text: "Create Order" },
    { icon: <UtensilsCrossed size={25} />, text: "Menu" },
    { icon: <Sheet size={25} />, text: "Tables" },
    { icon: <Users size={25} />, text: "Employees" },
    { icon: <Archive size={25} />, text: "Inventory" },
    { icon: <Refrigerator size={25} />, text: "Kitchen Orders" },
    { icon: <ChartSpline size={25} />, text: "Analytics" },
    { icon: <Settings size={25} />, text: "Settings" },
    { icon: <LogOut size={25} />, text: "Log Out" },
  ]

  return (
    <>
      <div className="flex h-screen">
        <SideBar>
          {sidebarItems.map((item, index) => (
            <SidebarItem 
              key={index} 
              icon={item.icon} 
              text={item.text} 
              active={item.active || false} 
            />
          ))}
        </SideBar>
        <main className="flex-grow">
          <Dashboard />
        </main>
      </div>
    </>
  )
}

export default App;
