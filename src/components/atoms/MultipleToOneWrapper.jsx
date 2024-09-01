import styles from "../../assets/css/atoms/MultipleToOneWrapper.module.css";
const MultipleToOneWrapper = (props) => {
    return(
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}

export default MultipleToOneWrapper;