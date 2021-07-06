import { Box, Typography } from '@material-ui/core';


const Button = props => {
    return (
        <Box>
            <button id={props.bTitle} className={props.className} onClick={props.clickable} ><Typography>{props.bTitle}</Typography></button>
        </Box>
    );
};

export default Button;