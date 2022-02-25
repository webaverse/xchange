import Logo from './logo'
import Filters from './filters'
function SideBar() {
    return (
        <div className='w-min hidden md:flex    '>
            <div className='w-[19vw] pt-10 flex flex-col border-r border-neutral-500/[.5] h-screen'>
                <Logo />
                <Filters />
                <div className='rounded-full mx-5 bg-teal-400 text-white text-xl text-white p-2 text-center mb-4'>PLAY</div>
            </div>
        </div>
    )
}

export default SideBar