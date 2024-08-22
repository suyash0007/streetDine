/* eslint-disable no-unused-vars */
import logo from "../assets/logo.svg"
export default function SideBar({children}) {
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col border-r shadow-sm">
            <div className="p-8 flex justify-center items-center">
                <img src={logo} alt="streetDine logo" className="w-20" />

            </div>
            <ul className="flex-1 px-6">{children}</ul>
           

        </nav>

      </aside>
    </>
  )
}

export function SidebarItem({icon,text,active}){
    return(
        <li className={`relative flex items-center py-4 px-3  font-medium rounded-md transition-colors group ${active ? "bg-gradient-to-r from-[#955aa5] via-[#ae85bc] to-[#d6c2dc] text-[#2d3f50] p-3 rounded-xl font-bold" : "text-[#62696b]"}`}>
            {icon}
            <span className="w-35 ml-3 cursor-pointer">{text}</span>
        </li>
    )
}
