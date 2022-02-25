import Text from 'components/text'

const demo = [{
    key: 'Background',
    value: 'Green',
    percent: '7%'
}, {
    key: 'Base',
    value: 'Mosu',
    percent: '13%'
}, {
    key: 'Eyes',
    value: 'Hypnotized',
    percent: '9%'
}, {
    key: 'Headgear',
    value: 'Army Hat',
    percent: '2%'
}]

function PrevieActions() {
    return (
        <div className="sticky bottom-4 grid grid-cols-2 gap-8 md:grid-cols-4">
            {demo.map( (item, i) => (
                <div key={`actions-${i}`} className='rounded-md px-4 py-2 text-base bg-neutral-700  w-[130px] relative border border-teal-400'>
                    <span className="absolute h-7 w-7 rounded-full bg-neutral-100 opacity-90 right-[-10px] top-[-10px] text-xs flex items-center justify-center text-neutral-700 font-bold">{item.percent}</span>
                    <Text className='text-teal-400 text-center font-bold'> {item.key} </Text>
                    <Text className='text-neutral-400 text-center font-bold'> {item.value} </Text>
                </div>
            ))}
        </div>
    )
}

export default PrevieActions