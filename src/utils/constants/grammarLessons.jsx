import Row from "../../components/atoms/Row";
import EmptySentenceBox from "../../components/molecules/EmptySentenceBox";
import Text from "../../components/atoms/Text";
import BoxWithText from "../../components/molecules/BoxWithText";
import EmptySentenceBox2 from "../../components/molecules/EmptySentenceBox2";
import MultipleToOne from "../../components/atoms/MultipleToOne";
import TextWithInfo from "../../components/molecules/TextWithInfo";
import Dot from "../../components/atoms/Dot";
import Slash from "../../components/atoms/Slash";
import Arrow from "../../components/atoms/Arrow";
import Coma from "../../components/atoms/Coma";
import CutText from "../../components/atoms/CutText";
import Kanji from "../../components/atoms/Kanji";
import Box from "../../components/atoms/Box";
import MultipleToOneWrapper from "../../components/atoms/MultipleToOneWrapper";

export const grammarLessons = [
    (
        <>
            <Row>
                <EmptySentenceBox />
                <Text>は</Text>
                <BoxWithText>Aい</BoxWithText>
                <TextWithInfo>です</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <EmptySentenceBox />
                <Text>は</Text>
                <BoxWithText>Aく</BoxWithText>
                <TextWithInfo>ないです</TextWithInfo>
                <Slash/>
                <TextWithInfo>ありません</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <Text>(</Text>
                <TextWithInfo>いい</TextWithInfo>
                <Arrow/>
                <TextWithInfo>よくない</TextWithInfo>
                <Text>)</Text>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox />
                <Text>は</Text>
                <BoxWithText>NA</BoxWithText>
                <TextWithInfo>です</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <EmptySentenceBox />
                <Text>は</Text>
                <BoxWithText>NA</BoxWithText>
                <TextWithInfo>じゃ ありません</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox />
                <Text>は</Text>
                <TextWithInfo>どうですか</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <TextWithInfo>とても</TextWithInfo>
                <BoxWithText>Aい</BoxWithText>
                <TextWithInfo>です</TextWithInfo>
                <Dot/>
                <Slash/>
                <BoxWithText>NA</BoxWithText>
                <TextWithInfo>です</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <TextWithInfo>あまり</TextWithInfo>
                <BoxWithText>Aく</BoxWithText>
                <TextWithInfo>ないです</TextWithInfo>
                <Dot/>
                <Slash/>
                <BoxWithText>NA</BoxWithText>
                <TextWithInfo>じゃ ありません</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox2 />
                <Text>が、</Text>
                <EmptySentenceBox2 />
                <Text>。</Text>
            </Row>
        </>
    ),(
        <>
            <Row>
                <MultipleToOneWrapper>
                    <MultipleToOne>
                        <Row>
                            <BoxWithText>A</BoxWithText>
                            <TextWithInfo>くて</TextWithInfo>
                            <Coma/>
                        </Row>
                        <Row>
                            <BoxWithText>NA</BoxWithText>
                            <TextWithInfo>で</TextWithInfo>
                            <Coma/>
                        </Row>
                    </MultipleToOne>
                    <BoxWithText>Aい</BoxWithText>
                    <Slash/>
                    <BoxWithText>NA</BoxWithText>
                    <TextWithInfo>です</TextWithInfo>
                    <Dot/>
                </MultipleToOneWrapper>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox/>
                <Text>え / に&nbsp;&nbsp;</Text>
                <TextWithInfo reading={"いきます"}>
                    <Kanji reading={"い"}>行</Kanji>
                    きます
                </TextWithInfo>
                <Slash/>
                <TextWithInfo reading={"きます"}>
                    <Kanji reading={"き"}>来</Kanji>
                    きます
                </TextWithInfo>
                <Slash/>
                <TextWithInfo reading={"かえります"}>
                    <Kanji reading={"かえ"}>帰</Kanji>
                    かえります
                </TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <MultipleToOneWrapper>
                    <MultipleToOne>
                        <Row>
                            <EmptySentenceBox/>
                            <Text>に&nbsp;&nbsp;</Text>
                        </Row>
                        <Row>
                            <BoxWithText>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Kanji reading={"なん"}>何</Kanji>
                                <Kanji reading={"じ"}>時</Kanji>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </BoxWithText>
                            <Text>に</Text>
                        </Row>
                        <Row>
                            <BoxWithText>
                                &nbsp;&nbsp;
                                <Kanji reading={"なん"}>何</Kanji>
                                <Kanji reading={"よう"}>曜</Kanji>
                                <Kanji reading={"び"}>日</Kanji>
                                &nbsp;&nbsp;
                            </BoxWithText>
                            <Text>(に)</Text>
                        </Row>
                        <Row>
                            <BoxWithText>
                                &nbsp;&nbsp;
                                いつ
                                &nbsp;&nbsp;&nbsp;
                            </BoxWithText>
                            <CutText><Text>に</Text></CutText>
                        </Row>
                    </MultipleToOne>
                    <TextWithInfo reading={"いきます"}>
                        <Kanji reading={"い"}>行</Kanji>
                        きます
                    </TextWithInfo>
                    <Slash/>
                    <TextWithInfo reading={"きます"}>
                        <Kanji reading={"き"}>来</Kanji>
                        きます
                    </TextWithInfo>
                    <Slash/>
                    <TextWithInfo reading={"かえります"}>
                        <Kanji reading={"かえ"}>帰</Kanji>
                        かえります
                    </TextWithInfo>
                    <Dot/>
                </MultipleToOneWrapper>
            </Row>
        </>
    ),(
        <>
            <Row>
                <BoxWithText>
                    <TextWithInfo>なん</TextWithInfo>
                </BoxWithText>
                <Text>で</Text>
                <BoxWithText>
                    <TextWithInfo>だれ</TextWithInfo>
                </BoxWithText>
                <Text>と</Text>
                <EmptySentenceBox/>
                <Text>へ</Text>
                <BoxWithText>Verb</BoxWithText>
                <TextWithInfo>ますか</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <BoxWithText>どこ(へ)も</BoxWithText>
                <TextWithInfo reading={"いきません"}>
                    <Kanji reading={"い"}>行</Kanji>
                    きません
                </TextWithInfo>
                <Slash/>
                <TextWithInfo>ませんでした</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox/>
                <Text>お</Text>
                <EmptySentenceBox/>
                <TextWithInfo>ます</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <BoxWithText>なに</BoxWithText>
                <Text>お</Text>
                <EmptySentenceBox/>
                <TextWithInfo>ますか</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <BoxWithText>どこ</BoxWithText>
                <Text>で</Text>
                <EmptySentenceBox/>
                <Text>お</Text>
                <EmptySentenceBox/>
                <TextWithInfo>ますか</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <BoxWithText>なにも</BoxWithText>
                <Text>+</Text>
                <EmptySentenceBox/>
                <TextWithInfo>ません</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <TextWithInfo>よく</TextWithInfo>
                <Coma/>
                <TextWithInfo>ときどき</TextWithInfo>
                <Coma/>
                <TextWithInfo>あまり</TextWithInfo>
                <Coma/>
                <TextWithInfo>ぜんぜん</TextWithInfo>
            </Row>
            <Row>
                <TextWithInfo>はい</TextWithInfo>
                <Coma/>
                <BoxWithText>よく</BoxWithText>
                <Slash/>
                <BoxWithText>ときどき</BoxWithText>
                <EmptySentenceBox/>
                <TextWithInfo>ます</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <TextWithInfo>いいえ</TextWithInfo>
                <Coma/>
                <BoxWithText>あまり</BoxWithText>
                <Slash/>
                <BoxWithText>ぜんぜん</BoxWithText>
                <EmptySentenceBox/>
                <TextWithInfo>ません</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <TextWithInfo>[ いっしょに ]</TextWithInfo>
                <EmptySentenceBox/>
                <TextWithInfo>ませんか</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <TextWithInfo>はい</TextWithInfo>
                <Coma/>
                <EmptySentenceBox/>
                <TextWithInfo>ましょう</TextWithInfo>
                <Dot/>
                <Slash/>
                <TextWithInfo>そう しましょう</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <TextWithInfo>すみません</TextWithInfo>
                <Coma/>
                <TextWithInfo>ちょっと · · · </TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox/>
                <Text>は</Text>
                <BoxWithText>A</BoxWithText>
                <TextWithInfo>かったです</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <EmptySentenceBox/>
                <Text>は</Text>
                <BoxWithText>Aく</BoxWithText>
                <TextWithInfo>なかったです</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox/>
                <Text>は</Text>
                <BoxWithText>NA</BoxWithText>
                <TextWithInfo>でした</TextWithInfo>
                <Dot/>
            </Row>
            <Row>
                <EmptySentenceBox/>
                <Text>は</Text>
                <BoxWithText>NA</BoxWithText>
                <TextWithInfo>じゃ ありませんでした</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox/>
                <Text>は</Text>
                <TextWithInfo>どうでしたか</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox/>
                <Text>は</Text>
                <EmptySentenceBox/>
                <Text>が</Text>
                <TextWithInfo>すき</TextWithInfo>
                <Slash/>
                <TextWithInfo>きらい</TextWithInfo>
                <TextWithInfo>です</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox/>
                <Text>は</Text>
                <EmptySentenceBox/>
                <Text>が</Text>
                <TextWithInfo reading={"じょうず"}>
                    <Kanji reading={"じょう"}>上</Kanji>
                    &nbsp;
                    <Kanji reading={"ず"}>手</Kanji>
                </TextWithInfo>
                <Slash/>
                <TextWithInfo reading={"えた"}>
                    <Kanji reading={"え"}>下</Kanji>
                    <Kanji reading={"た"}>手</Kanji>
                </TextWithInfo>
                <TextWithInfo>です</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <EmptySentenceBox/>
                <Text>は</Text>
                <EmptySentenceBox/>
                <Text>が</Text>
                <Coma/>
                <EmptySentenceBox/>
                <Text>は</Text>
                <EmptySentenceBox/>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <TextWithInfo>どうして</TextWithInfo>
                <EmptySentenceBox2/>
                <Text>か</Text>
                <Dot/>
            </Row>
            <Row>
                <EmptySentenceBox/>
                <TextWithInfo>から</TextWithInfo>
                <Dot/>
            </Row>
        </>
    ),(
        <>
            <Row>
                <Text>To be added...</Text>
            </Row>
        </>
    )
]