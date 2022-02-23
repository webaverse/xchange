import Image from 'next/image'
import BtnImage from 'public/search-btns.png'

function SearchPanel() {
    return (
        <div className="flex flex-row justify-between my-4 w-full bg-stone-900 sticky top-0">
            <input placeholder="Type a keyword" className="bg-stone-900 appearance-none focus:outline-none text-white/[.68] py-3 pl-5 text-xl"/>
            <div className='flex items-center'>
                <Image src={BtnImage} alt='Buttons' layout='intrinsic' height={39}/>
            </div>
        </div>
    )
}

export default SearchPanel;