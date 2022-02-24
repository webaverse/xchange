import { useRouter } from 'next/router'

import Text from 'components/text'

const result = [
    {src: '/search/search-1.png', name: 'Name art work', price: '2,024ETH'},
    {src: '/search/search-2.png', name: 'Name art work', price: '2,024ETH'},
    {src: '/search/search-3.png', name: 'Name art work', price: '2,024ETH'},
    {src: '/search/search-1.png', name: 'Name art work', price: '2,024ETH'},
]

function Items() {
    const router = useRouter()
    const search = router.query

    const handleClick = (ev) => {
        router.push('/items/1')
    }
    return (
        <div className='grid grid-cols-4 gap-4'>
        {result.map((item, id) => (
            <div key={id} className='cursor-pointer' onClick={handleClick}>
                <div className='flex w-full items-center pb-5'>
                    <img src={item.src} alt={item.name} />
                </div>
                <Text className='text-white text-lg font-bold'>{item.name}</Text>
                <Text className='text-neutral-400 flex flex-row text-xs'>Current price: <Text className='ml-2 text-teal-400'>{item.price}</Text></Text>
            </div>
        ))}
        </div>
    )
}

export default Items