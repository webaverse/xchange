import Navigation from './navigation'
import Avatar from './avatar'

function NavBar() {
    return (
        <div className='w-min'>
            <div className='w-[19vw] flex flex-col bg-stone-900 pt-6 p-[2.5vw] pt-6 shadow-[0px_0px_3px_3px]  overflow-x-hidden h-screen hover:overflow-y-scroll overflow-y-hidden'>
                <Avatar />
                <Navigation />
            </div>
        </div>
    )
}

export default NavBar