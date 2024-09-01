import styles from "../../assets/css/atoms/CutText.module.css";
const CutText = (props) => {
    return(
        <div className={styles.main}>
            {props.children}
            <div className={styles.cutLine}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default CutText;