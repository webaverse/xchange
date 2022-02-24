import styles from './index.module.css';
import Text from 'components/text1';

function CheckBox({label, className, name, onChange}) {
    return (
        <label className={styles.container + ' flex flex-row items-center ' + className}>
            <input type="checkbox" onChange={onChange} name={name} />
            <span className={styles.checkmark}></span>
            <Text>
                {label}
            </Text>
        </label>
    )
}

export default CheckBox;