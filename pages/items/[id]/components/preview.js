/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'

import PreviewBadge from './preview-badge.js'
import PreviewAlert from './preview-alert.js'
import PreviewActions from './preview-actions'
function Preview({mode, item}) {
    
    const [showInfo, setShowInfo] = useState(false) 

    const handleInfo = () => {
        setShowInfo(true)
    }

    useEffect( () => {
        if(showInfo) {
            setTimeout(() => setShowInfo(false), 3000)   
        }
    }, [showInfo])
    return (
        <>
            <PreviewBadge handleInfo={handleInfo}/>
            <div className="w-2/3 pt-28">
                <img src={item && item['src']} alt="Preview" />
            </div>
            {
                showInfo ? <PreviewAlert /> : null
            }
            <PreviewActions />
        </>
    )
}

export default Preview