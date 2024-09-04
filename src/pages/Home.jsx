import {Link, Outlet} from "react-router-dom";
import styles from "../assets/css/pages/Home.module.css";
import {useState} from "react";

const Home = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.main}>
            <header>
                <button>

                </button>
                <Link to={"grammar"}
                      className={selected === 0 ? styles.selected : ""}
                      onClick={() => {setSelected(0)}}
                >
                    Grammar
                </Link>
                <Link to={"dictionary"}
                      className={selected === 1 ? styles.selected : ""}
                      onClick={() => {
                    setSelected(1)}}
                >
                    Dictionary
                </Link>
                <Link to={"counters"}
                      className={selected === 2 ? styles.selected : ""}
                      onClick={() => {
                          setSelected(2)}}
                >
                    Counters
                </Link>
                <Link to={"kanji"}
                      className={selected === 3 ? styles.selected : ""}
                      onClick={() => {
                          setSelected(3)}}
                >
                    Kanji
                </Link>
            </header>
            <section>
                <div className={styles.wrapper1}>
                    <div className={styles.wrapper2}>
                        <Outlet/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;