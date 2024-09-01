import styles from "../../assets/css/atoms/MultipleToOne.module.css";
import closedBracket from "../../assets/images/closedBracket.png";
const MultipleToOne = (props) => {
    return(
        <div className={styles.main}>
            <div>
                {props.children}
            </div>
            <div className={styles.bracket}><img src={closedBracket} alt=""/></div>
        </div>
    )
}

export default MultipleToOne;