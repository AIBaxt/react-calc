//Imports
import { useState } from 'react';
//Components
import CalcButtons from './CalcButtons';
import CalcDisplay from './CalcDisplay';
//Styling
import { Box, Paper } from '@material-ui/core';

const Calculator = props => {
    return (
        <Box>
            <Paper>
                <CalcDisplay />
                <CalcButtons />
            </Paper>
        </Box>
    );
};

export default Calculator;
