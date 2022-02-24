import { useState } from 'react'

import Text from 'components/text1'
import Preview from './preview'

const modes = ["Normal", "Wireframe", "LIT", "InGame"]

function Detail() {
    const [mode, setMode] = useState('Normal')
    const demo = {
        src:'/detail.png'
    }
    return (
        <div className='flex flex-col pt-24'>
            <div className='flex flex-row relative justify-center'>
                <Text className='text text-white absolute left-0 text-2xl font-bold top-[-8px]'>View options</Text>
                <div className='flex flex-row space-x-6'>
                {
                    modes.map((item, i) => (
                        <Text key={item} className={`text-${mode === item ? 'teal-400': 'neutral-400'} cursor-pointer`} onClick={() => setMode(item)}>
                            {item}
                        </Text>
                    ))
                }
                </div>
            </div>
            <Preview item={demo} mode={mode}/>
        </div>
    )
}

export default Detail