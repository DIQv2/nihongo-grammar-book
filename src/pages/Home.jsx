import styles from "../assets/css/pages/Home.module.css";
import {useState} from "react";
import Grammar from "./Grammar";
import Dictionary from "./Dictionary";
import Counters from "./Counters";
import KanjiPage from "./KanjiPage";

const Home = () => {
    const [selectedPage, setSelectedPage] = useState("grammar");

    return (
        <div className={styles.main}>
            <header>
                <button onClick={() => {
                    setSelectedPage("grammar")
                }}
                        className={selectedPage === "grammar" ? styles.selected : ""}
                >Grammar</button>
                <button onClick={() => {
                    setSelectedPage("dictionary")
                }}
                        className={selectedPage === "dictionary" ? styles.selected : ""}
                >Dictionary</button>
                <button onClick={() => {
                    setSelectedPage("counters")
                }}
                        className={selectedPage === "counters" ? styles.selected : ""}
                >Counters</button>
                <button onClick={() => {
                    setSelectedPage("kanji")
                }}
                        className={selectedPage === "kanji" ? styles.selected : ""}
                >Kanji</button>
            </header>
            <section>
                <div className={styles.wrapper1}>
                    <div className={styles.wrapper2}>
                        {selectedPage === "grammar" && (<Grammar />)}
                        {selectedPage === "dictionary" && (<Dictionary />)}
                        {selectedPage === "counters" && (<Counters />)}
                        {selectedPage === "kanji" && (<KanjiPage />)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;