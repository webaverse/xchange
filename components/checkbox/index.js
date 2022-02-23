import styles from './index.module.css';
import Text from 'components/Text';

function CheckBox({label, className}) {
    return (
        <label className={styles.container + ' flex flex-row items-center ' + className}>
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
            <Text>
                {label}
            </Text>
        </label>
    )
}

export default CheckBox;