import CheckBox from "components/checkbox"

const filters = [
    {
        label: 'Wearables',
        children: [
            'Skinned',
            'Unskinned'
        ]
    }, {
        label: 'Attachments',
        children: [
            'All Attachments',
            '??'
        ]
    }, {
        label: 'Pets',
        children: [
            'All Pets',
            '??'
        ]
    }, {
        label: 'Weapons',
        children: [
            'Melee',
            'Ranged'
        ]
    }, {
        label: 'Verhicles',
        children: [
            'Aerial',
            'Locomotion'
        ]
    }, {
        label: 'File Type',
        children: [
            '3D model',
            'VRM'
        ]
    }
]

function Filters() {
    return (
        <div className='flex flex-col pt-14 overflow-y-hidden hover:overflow-y-scroll p-[2vw] section'>
            <h6 className='text-white'>UpStreet</h6>
            {
                filters.map((filter, id) => (
                    <div key={id} className='pt-6 flex flex-col'>
                        <h7 className='text-teal-400'> {filter.label}</h7>
                        {filter.children.map( (item) => (
                            <CheckBox label={item} key={`${id}-${item}`} className='text-white/[.5]' />
                        ))}                        
                    </div>
                ))
            }
        </div>
    )
}
export default Filters