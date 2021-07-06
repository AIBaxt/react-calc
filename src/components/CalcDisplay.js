//Imports
import { useState } from 'react';
//Styling
import './CalcDisplay.css';
import { Box, Typography, Paper } from '@material-ui/core';

const CalcDisplay = props => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <div class="display">
                <Box mr={2}>
                    <Typography>Hello</Typography>
                </Box>
            </div>
        </Box >

    );
};

export default CalcDisplay;