import Box from "../atoms/Box";
import Text from "../atoms/Text";

const BoxWithText = (props) => {
    return(
        <Box>
            <Text disableHover={true}>{props.children}</Text>
        </Box>
    )
}

export default BoxWithText;