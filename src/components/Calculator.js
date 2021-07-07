//Imports
import { useState } from 'react';
//Components
import CalcButtons from './CalcButtons';
import CalcDisplay from './CalcDisplay';
//Styling
import { Box, Paper } from '@material-ui/core';
import { evaluate } from 'mathjs';

const Calculator = props => {

    const [displayText, setDisplayText] = useState('')

    const displayTextUpdater = data => {
        setDisplayText(displayText.concat(data));
    };

    const calculate = () => {
        let result = evaluate(displayText);
        setDisplayText(result)
    };

    const clearDisplay = () => {
        setDisplayText('');
    }

    return (
        <Box>
            <Paper>
                <CalcDisplay displayText={displayText} />
                <CalcButtons onButtonPress={displayTextUpdater} onClearPress={clearDisplay} onEqualPress={calculate} />
            </Paper>
        </Box>
    );
};

export default Calculator;
