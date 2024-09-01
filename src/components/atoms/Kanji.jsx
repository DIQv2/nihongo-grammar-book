import styles from "../../assets/css/atoms/Kanji.module.css";

const Kanji = (props) => {
    const {
        reading
    } = props;
    return(
        <div className={styles.main}>
            <div>{props.children}</div>
            {reading && (
                <div className={styles.reading}>{reading}</div>
            )}
        </div>
    )
}

export default Kanji;