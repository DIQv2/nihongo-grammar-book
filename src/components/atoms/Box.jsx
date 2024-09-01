import styles from "../../assets/css/atoms/Box.module.css";
const Box = (props) => {
    return(
        <div className={styles.box}>
            {props.children}
        </div>
    )
}

export default Box;