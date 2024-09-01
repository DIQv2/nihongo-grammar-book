import GrammarSnippet from "../components/atoms/GrammarSnippet";
import {grammarLessons} from "../utils/constants/grammarLessons";

const Grammar = () => {
    return(
        <>
            {grammarLessons.map((lesson, index)=>(
                <div key={index}>
                    <GrammarSnippet number={index+1}>
                        {lesson}
                    </GrammarSnippet>
                </div>
            ))}
        </>
    )
}

export default Grammar;