/* eslint-disable @next/next/no-img-element */
function Preview({mode, item}) {
    return (
        <div>
            <img src={item && item['src']} alt="Preview" />
        </div>
    )
}

export default Preview