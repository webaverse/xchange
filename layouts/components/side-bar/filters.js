import { useRouter } from 'next/router'
import { useState } from "react"

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
    const router = useRouter()

    const [active, setActive] = useState([]);
    
    const handleFilter = (ev) => {
        let updated = [...active]

        if (ev.target.checked) {
            updated.push(ev.target.name)
        } else {
            updated.splice(updated.indexOf(ev.target.name), 1)
        }
        setActive(updated)
        router.push('/items?' + updated.join('&&'))
    }

    return (
        <div className='flex flex-col pt-14 overflow-y-hidden hover:overflow-y-scroll p-[2vw] section'>
            <h5 className='text-white'>UpStreet</h5>
            {
                filters.map((filter, id) => (
                    <div key={id} className='pt-6 flex flex-col'>
                        <h6 className='text-teal-400'> {filter.label}</h6>
                        {filter.children.map( (item) => (
                            <CheckBox label={item} key={`${id}-${item}`} name={`${filter.label}=${item}`} className='text-white/[.5]' onChange={handleFilter} />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}
export default Filters