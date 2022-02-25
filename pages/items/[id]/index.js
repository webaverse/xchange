import { useState } from 'react'

import Text from 'components/text'
import Preview from './components/preview'

const modes = ["Normal", "Wireframe", "LIT", "InGame"]

function Detail() {
    const [mode, setMode] = useState('Normal')
    const demo = {
        src:'/detail.png'
    }
    return (
        <div className='flex flex-col md:pt-24 pt-4 h-available'>
            <div className='flex md:flex-row flex-col relative justify-center'>
                <Text className='text text-white md:absolute left-0 text-2xl font-bold top-[-8px] pb-2 w-full md:text-left text-center'>View options</Text>
                <div className='flex flex-row space-x-6 w-full justify-center'>
                {
                    modes.map((item, i) => (
                        <Text key={item} className={`text-${mode === item ? 'teal-400': 'neutral-400'} cursor-pointer`} onClick={() => setMode(item)}>
                            {item}
                        </Text>
                    ))
                }
                </div>
            </div>
            <div className='flex w-full h-available items-center justify-center relative mt-8 flex-col'>
                <Preview item={demo} mode={mode}/>
            </div>
        </div>
    )
}

export default Detail