import LogoImage from 'public/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Logo() {
    const router = useRouter()
    return (
        <div id='logo' className='h-20 flex flex-row p-[2vw] items-center'>
            <div className='w-20'>
                <Image src={LogoImage} alt='Logo' className='w-full cursor-pointer' onClick={() => router.push('/')}/>
            </div>
            <div className='flex flex-col text-white pl-[14px] justify-center truncate'>
                <h5>UpStreet</h5>
                <h6>Market</h6>
            </div>

        </div>
    )
}

export default Logo