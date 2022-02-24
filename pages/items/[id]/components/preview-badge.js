/* eslint-disable @next/next/no-img-element */
import Text from 'components/text'

function PreviewBadge({mode, item}) {
    return (
        <>
            <div className="absolute top-0 left-0">
                <div className='flex flex-row items-start space-x-4'>
                    <img src='/preview-type.png' alt='Item type' />
                    <Text className='text-white font-bold text-lg'>Name art work
                        <Text className='text-neutral-400 font-normal text-sm flex flex-row mt-3'> Current price: <Text className='text-teal-400 ml-4'> 204 ETH </Text> </Text>
                    </Text>
                    <div className='h-8 flex flex-row space-x-4 mt-1'>
                        <img src='/car.png' alt='Item type' />
                        <img src='/info.png' alt='Item type' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviewBadge