import styles from "../assets/css/pages/Dictionary.module.css";
import {Adjectives1} from "../utils/constants/dictionary/adjectives/adjectives.1";
import TextWithInfo from "../components/molecules/TextWithInfo";
import Text from "../components/atoms/Text";
import Row from "../components/atoms/Row";
import {Adjectives2} from "../utils/constants/dictionary/adjectives/adjectives.2";
import DictionaryTitle from "../components/atoms/DictionaryTitle";
import DictionarySubtitle from "../components/atoms/DictionarySubtitle";
import DictionaryWrapper from "../components/atoms/DictionaryWrapper";
import {movementVerbs} from "../utils/constants/dictionary/verbs/movement.verbs";
import {verbs1} from "../utils/constants/dictionary/verbs/verbs.1";
import Kanji from "../components/atoms/Kanji";
const Dictionary = () => {
    return(
        <div className={styles.main}>
            <DictionaryWrapper>
                <Row><DictionaryTitle>Adjectives</DictionaryTitle></Row>
                <Row><DictionarySubtitle>Aい</DictionarySubtitle></Row>
                <MakeArrayWordTranslation words={Adjectives1}/>
                <Row><DictionarySubtitle>NA</DictionarySubtitle></Row>
                <MakeArrayWordTranslation words={Adjectives2}/>
            </DictionaryWrapper>
            <DictionaryWrapper>
                <Row><DictionaryTitle>Verbs</DictionaryTitle></Row>
                <Row><DictionarySubtitle>Movement</DictionarySubtitle></Row>
                <div>
                    <Row>
                        <TextWithInfo reading={"いきます"}>
                            <Kanji reading={"い"}>行</Kanji>
                            きます
                        </TextWithInfo>
                        <Text>-</Text>
                        <Text>to go</Text>
                    </Row>
                </div>
                <div>
                    <Row>
                        <TextWithInfo reading={"きます"}>
                            <Kanji reading={"き"}>来</Kanji>
                            きます
                        </TextWithInfo>
                        <Text>-</Text>
                        <Text>to come</Text>
                    </Row>
                </div>
                <div>
                    <Row>
                        <TextWithInfo reading={"かえります"}>
                            <Kanji reading={"かえ"}>帰</Kanji>
                            かえります
                        </TextWithInfo>
                        <Text>-</Text>
                        <Text>return (home)</Text>
                    </Row>
                </div>
                <Row><DictionarySubtitle>Action</DictionarySubtitle></Row>
                <MakeArrayWordTranslation words={verbs1}/>
            </DictionaryWrapper>
            <DictionaryWrapper>
                <Row><DictionaryTitle>Nouns</DictionaryTitle></Row>
            </DictionaryWrapper>
        </div>
    )
}

const MakeArrayWordTranslation = (props) => {
    return (
        <>
            {props.words.map((word, index) => (
                <div key={index}>
                    <Row>
                         <TextWithInfo>{word[0]}</TextWithInfo>
                         <Text>-</Text>
                         <Text>{word[1]}</Text>
                     </Row>
                 </div>
            ))}
        </>
    )
}

export default Dictionary;