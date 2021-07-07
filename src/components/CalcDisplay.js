//Imports

//Styling
import './CalcDisplay.css';
import { Box, Typography } from '@material-ui/core';

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