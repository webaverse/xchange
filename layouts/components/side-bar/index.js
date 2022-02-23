import Logo from './logo'
import Filters from './filters'
function SideBar() {
    return (
        <div className='w-[19vw] pt-10 flex flex-col border-r border-neutral-500/[.5] overflow-x-scroll'>
            <Logo />
            <Filters />
        </div>
    )
}

export default SideBar