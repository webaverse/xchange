import LogoImage from 'public/logo.png'
import Image from 'next/image'
function Logo() {
    return (
        <div id='logo' className='h-20 flex flex-row p-[2vw] items-center'>
            <div className='w-20'>
                <Image src={LogoImage} alt='Logo' className='w-full'/>
            </div>
            <div className='flex flex-col text-white pl-[14px] justify-center truncate'>
                <h6>UpStreet</h6>
                <h7>Market</h7>
            </div>

        </div>
    )
}

export default Logo