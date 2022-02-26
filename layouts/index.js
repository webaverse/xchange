import SideBar from "./components/side-bar"
import NavBar from "./components/nav-bar"
import SearchPanel from "./components/search-panel"

function DefaultLayout({children}) {
    return (
        <div className="bg-neutral-900 h-screen flex flex-row justify-between">
            <SideBar />
            <div className="w-available px-[3vw] h-screen overflow-y-scroll">
                <SearchPanel />
                {children}
            </div>
            <NavBar />
        </div>
    )
}

export default DefaultLayout