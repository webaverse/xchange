import Image from 'next/image'
import Text from "components/text"

const items = [
  {
    src: '/items/item-1.png',
    isHot: true,
  }, {
    src: '/items/item-2.png',
    isHot: true,
  }, {
    src: '/items/item-3.png',
    isHot: true,
  }, {
    src: '/items/item-4.png',
    isHot: true,
  }
]
export default function Home() {
  return (
    <div className="flex flex-col h-min">
      <div className="flex w-full bg-stone-900 h-60 text-2xl text-white items-center justify-center mb-10">CTA</div>
      
      <Text className="pb-4 text-2xl text-white font-bold">Hot Items 🔥</Text>
      <div className="grid grid-cols-2 gap-8 pb-8">
      {
        items.map( (item, i) => (
          <div key={`item-${i}`} className="relative">
            <img src={item.src} alt='item image' />
            { item.isHot ? <div className="absolute top-0 bg-[url('/items/hot-badge.png')] bg-no-repeat bg-cover w-[4vw] h-[4vw]"></div> : null}
            <div className="absolute bottom-2 right-2 bg-[url('/items/price-badge.png')] w-2/3 py-2 pl-3 bg-cover bg-no-repeat rounded-md">
              <Text className='font-bold text-lg text-white mb-2'> Name art work </Text>
              <Text className='font-bold text-neutral-400 flex flex-row text-xs'> Current price: <Text className='text-teal-400'> 2,04 ETH </Text> </Text>
            </div>
          </div>
        ))
      }
      </div>

    </div>
  )
}
