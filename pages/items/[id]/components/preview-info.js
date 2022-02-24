import Text from 'components/text'

function PreviewInfo() {
    return (
        <div className='alert-toast fixed bottom-4 backdrop-blur-sm bg-neutral-850/90  text-white flex flex-col w-2/5 p-4 z-10'>
            <div className='flex flex-row justify-between w-full'>
                <Text>Contact Address</Text>
                <Text>0xd2f6...32c6</Text>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <Text>Token ID</Text>
                <Text>1930</Text>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <Text>Token Standard</Text>
                <Text>ERC-721</Text>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <Text>Blockchain</Text>
                <Text>Ethereum</Text>
            </div>
        </div>
    )
}


//  0xd2f6...32c6
//     1930
// Token Standard   ERC-721
// Blockchain   Ethereum
export default PreviewInfo