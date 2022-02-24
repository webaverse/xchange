import Text from 'components/text1'

const items = [
    {
        label: 'Market related',
        children: [
            'Market',
            'Active bids',
            'Saved'
        ]
    }, {
        label: 'Account',
        children: [
            'My Collection',
            'Wallet',
            'History'
        ]
    }, {
        label: 'Other',
        children: [
            'Map',
            'Docs',
            'Carreers',
            'Options'
        ]
    },
]

function Navigation() {
    return (
        <div className='flex flex-col w-full text-right'>
        {
            items.map(({label, children}, id) => (
                <div key={id} className='pt-12 justify-end'>
                    <Text className='text-teal-400 pb-3 text-xl'>{label}</Text>
                    {
                        children.map((data, index) => (
                            <Text key={index} className='pt-4 text-neutral-300/[.5] text-2xl'> {data} </Text>
                        ))
                    }
                </div>
            ))
        }
        </div>
    )
}

export default Navigation;