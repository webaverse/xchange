import Logo from './logo'
import Filters from './filters'
function SideBar() {
    return (
        <div className='w-min'>
            <div className='w-[19vw] pt-10 flex flex-col border-r border-neutral-500/[.5] h-screen'>
                <Logo />
                <Filters />
            </div>
        </div>
    )
}

export default SideBar