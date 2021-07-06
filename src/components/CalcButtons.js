//Imports
import { Fragment } from 'react';
//Styling
import './CalcButton.css';
import { Box, Toolbar } from '@material-ui/core';
import Button from './UI/Button';

const CalcButtons = props => {

    return (
        <Fragment>
            <Box >
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button bTitle="7"></Button>
                    <Button bTitle="8"></Button>
                    <Button bTitle="9"></Button>
                    <Button class="special" bTitle="X"></Button>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button bTitle="4"></Button>
                    <Button bTitle="5"></Button>
                    <Button bTitle="6"></Button>
                    <Button class="special" bTitle="-"></Button>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button bTitle="1"></Button>
                    <Button bTitle="2"></Button>
                    <Button bTitle="3"></Button>
                    <Button class="special" bTitle="+"></Button>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button bTitle="0"></Button>
                    <Button bTitle="."></Button>
                    <Button bTitle="="></Button>
                    <Button class="special" bTitle="/"></Button>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button class="clear" bTitle="Clear"></Button>
                </Box>

            </Box>

        </Fragment >

    );
};

export default CalcButtons;
