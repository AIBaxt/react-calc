import { Box, Typography } from '@material-ui/core';


const Button = props => {
    return (
        <Box>
            <button id={props.bTitle} class={props.class}><Typography>{props.bTitle}</Typography></button>
        </Box>
    );
};

export default Button;