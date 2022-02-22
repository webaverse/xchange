import styles from './index.module.css'

function CheckBox({label, className}) {
    return (
        <label className={styles.container + ' flex flex-row items-center ' + className}>
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
            {label}
        </label>
    )
}

export default CheckBox;