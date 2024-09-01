import {useState} from "react";
import {kanaToRomaji} from "../../utils/functions/kanaToRomaji";
import styles from "../../assets/css/molecules/TextWithInfo.module.css";

const TextWithInfo = (props) => {
    const {
        reading
    } = props;
    const [hovering, setHovering] = useState(false);
    return(
        <div className={styles.main}>
            <div onMouseEnter={()=>{setHovering(true)}}
                 onMouseLeave={()=>{setHovering(false)}}
                 className={styles.secondary}
            >
                {props.children}
            </div>
            {hovering && (
                <div className={styles.hover}>{reading ? kanaToRomaji(reading) : kanaToRomaji(props.children)}</div>
            )}
        </div>
    )
}

export default TextWithInfo;