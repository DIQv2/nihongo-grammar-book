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

            </Row>
        </>
    )
]