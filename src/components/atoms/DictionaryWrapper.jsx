import styles from "../../assets/css/atoms/DictionaryWrapper.module.css";
const DictionaryWrapper = (props) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                {props.children}
            </div>
        </div>
    )
}

export default DictionaryWrapper;