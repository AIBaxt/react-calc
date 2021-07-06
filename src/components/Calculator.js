//Imports
import { useState } from 'react';
//Components
import CalcButtons from './CalcButtons';
import CalcDisplay from './CalcDisplay';
//Styling
import { Box, Paper } from '@material-ui/core';

const Calculator = props => {

    const [displayText, setDisplayText] = useState("0")

    const displayTextUpdater = data => {
        setDisplayText(data);
    };

    return (
        <Box>
            <Paper>
                <CalcDisplay displayText={displayText} />
                <CalcButtons onButtonPress={displayTextUpdater} />
            </Paper>
        </Box>
    );
};

export default Calculator;
