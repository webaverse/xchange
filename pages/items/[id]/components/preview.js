/* eslint-disable @next/next/no-img-element */
import Text from 'components/text'
import PreviewBadge from './preview-badge.js'
function Preview({mode, item}) {
    return (
        <>
            <PreviewBadge />
            <div className="w-2/3">
                <img src={item && item['src']} alt="Preview" />
            </div>
        </>
    )
}

export default Preview