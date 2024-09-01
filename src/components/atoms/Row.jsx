import styles from "../../assets/css/atoms/GrammarRow.module.css";
const Row = (props) => {
    return(
        <div className={styles.main}>
            {props.children}
        </div>
    )
}

export default Row;