import Filter from "./components/filter"

function DefaultLayout({children}) {
    return (
        <div className="bg-neutral-900 h-screen flex flex-row">
            <Filter />
            {children}
        </div>
    )
}

export default DefaultLayout