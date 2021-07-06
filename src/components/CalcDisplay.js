//Imports
import { useState } from 'react';
//Styling
import './CalcDisplay.css';
import { Box, Typography, Paper } from '@material-ui/core';

const CalcDisplay = props => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <div className="display">
                <Box mr={2}>
                    <Typography>{props.displayText}</Typography>
                </Box>
            </div>
        </Box >

    );
};

export default CalcDisplay;