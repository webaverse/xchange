/* eslint-disable @next/next/no-img-element */
import Logo from './logo'
import Filters from './filters'
function SideBar() {
    const toggleDisplay = () => {
        let origin = document.getElementById('sidebar-body').style.display
        console.log(origin);
        document.getElementById('sidebar-body').style.display = origin === 'flex' ? '': 'flex'
        document.getElementById('sidebar-overlay').style.display = origin === 'flex' ? '': 'flex'
    }
    return (
        <>
            <div id='sidebar-overlay' className='hidden absolute w-screen h-screen bg-black/[0.8] z-10' onClick={toggleDisplay}></div>
            <div id='sidebar-body' className='w-min lg:flex hidden lg:static absolute lg:z-0 z-20 lg:px-0 pl-2 bg-neutral-900'>
                <div className='lg:w-[19vw] w-min pt-10 flex flex-col border-r border-neutral-500/[.5] h-screen'>
                    <Logo />
                    <Filters />
                    <div className='rounded-full mx-5 bg-teal-400 text-white text-xl text-white p-2 text-center mb-4'>PLAY</div>
                </div>
            </div>
            <div onClick={toggleDisplay} className='absolute h-6 w-6 top-[50%] z-10 rounded-full border-white border p-1 lg:hidden'><img src='/house.svg' alt='toggle menu' /></div>
        </>
    )
}

export default SideBar