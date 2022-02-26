import Text from 'components/text'
import Alert from 'components/alert'

function PreviewAlert() {
    return (
        <Alert>
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
        </Alert>
    )
}


//  0xd2f6...32c6
//     1930
// Token Standard   ERC-721
// Blockchain   Ethereum
export default PreviewAlert