import SideBar from "./components/side-bar"

function DefaultLayout({children}) {
    return (
        <div className="bg-neutral-900 h-screen flex flex-row">
            <SideBar />
            {children}
        </div>
    )
}

export default DefaultLayout