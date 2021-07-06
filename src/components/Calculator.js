//Imports
import { useState } from 'react';
//Components
import CalcButtons from './CalcButtons';
//Styling
import { Box, Paper } from '@material-ui/core';

const Calculator = props => {
    return (
        <Box>
            <Paper>
                <CalcButtons />
            </Paper>
        </Box>
    );
};

export default Calculator;
