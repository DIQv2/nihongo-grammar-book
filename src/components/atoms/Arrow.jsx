import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import styles from "../../assets/css/atoms/Arrow.module.css";

const Arrow = () => {
    return(
        <FontAwesomeIcon icon={faArrowRight} className={styles.design}/>
    )
}

export default Arrow;