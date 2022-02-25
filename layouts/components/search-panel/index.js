import Image from 'next/image'
import BtnImage from 'public/search-btns.png'

function SearchPanel() {
    return (
        <div className="flex flex-row justify-between my-4 w-full bg-stone-900 sticky top-4 z-10">
            <input placeholder="Type a keyword" className="bg-stone-900 appearance-none focus:outline-none text-white/[.68] py-3 pl-5 text-xl sm:w-1/2 w-full"/>
            <div className='flex items-center absolute right-0 h-full right-0 hidden md:flex'>
                <Image src={BtnImage} alt='Buttons' layout='intrinsic' height={39}/>
            </div>
        </div>
    )
}

export default SearchPanel;