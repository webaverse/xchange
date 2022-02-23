import SideBar from "./components/side-bar"
import NavBar from "./components/nav-bar"

function DefaultLayout({children}) {
    return (
        <div className="bg-neutral-900 h-screen flex flex-row justify-between">
            <SideBar />
            <div className="w-max px-[3vw]">
                {children}
            </div>
            <NavBar />
        </div>
    )
}

export default DefaultLayout