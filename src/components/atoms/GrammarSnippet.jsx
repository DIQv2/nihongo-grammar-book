import styles from "../../assets/css/atoms/GrammarSnippet.module.css";
import {convertToRoman} from "../../utils/functions/convert.to.roman";
const GrammarSnippet = (props) => {
    return(
        <div className={styles.main}>
            <div className={styles.number}>{convertToRoman(props.number)}</div>
            <div>{props.children}</div>
        </div>
    )
}

export default GrammarSnippet;