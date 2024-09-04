import styles from "../assets/css/pages/Home.module.css";
import {useState} from "react";
import Grammar from "./Grammar";
import Dictionary from "./Dictionary";
import Counters from "./Counters";
import KanjiPage from "./KanjiPage";

const Home = () => {
    const [selected, setSelected] = useState("grammar");
    const pages = ["grammar", "dictionary", "counters", "kanji"];

    return (
        <div className={styles.main}>
            <header>
                {pages.map((page, index)=>(
                    <button onClick={()=>{setSelected(page)}}
                            className={selected === page ? styles.selected : ""}
                    >
                        {page.toUpperCase()}
                    </button>
                ))}
            </header>
            <section>
                <div className={styles.wrapper1}>
                    <div className={styles.wrapper2}>
                        {selected === pages[0] && (<Grammar/>)}
                        {selected === pages[1] && (<Dictionary/>)}
                        {selected === pages[2] && (<Counters/>)}
                        {selected === pages[3] && (<KanjiPage/>)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;