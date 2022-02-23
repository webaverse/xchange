import Text from 'components/Text'
import Image from 'next/image'
import AvatarImg from 'public/avatar.png'
import PlayImg from 'public/play.png'

function Avatar() {
    return (
        <div className='flex flex-row items-center w-max'>
            <div  className='w-12'>
                <Image src={AvatarImg} alt='Avatar'/>
            </div>
            <Text className='pl-5 text-neutral-300 text-base'>Username#2112</Text>
            <Image src={PlayImg} alt='Avatar' width={20} height={24}/>
        </div>
    )
}

export default Avatar;