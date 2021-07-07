//Imports
import { Fragment } from 'react';
//Styling
import './CalcButton.css';
import { Box } from '@material-ui/core';
import Button from './UI/Button';

const CalcButtons = props => {
    const displayTextUpdater = event => {
        props.onButtonPress(event.currentTarget.id);
    };

    return (
        <Fragment>
            <Box >
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button bTitle="7" clickable={displayTextUpdater} />
                    <Button bTitle="8" clickable={displayTextUpdater} />
                    <Button bTitle="9" clickable={displayTextUpdater} />
                    <Button className="special" bTitle=" * " clickable={displayTextUpdater} />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button bTitle="4" clickable={displayTextUpdater} />
                    <Button bTitle="5" clickable={displayTextUpdater} />
                    <Button bTitle="6" clickable={displayTextUpdater} />
                    <Button className="special" bTitle=" - " clickable={displayTextUpdater} />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button bTitle="1" clickable={displayTextUpdater} />
                    <Button bTitle="2" clickable={displayTextUpdater} />
                    <Button bTitle="3" clickable={displayTextUpdater} />
                    <Button className="special" bTitle=" + " clickable={displayTextUpdater} />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button bTitle="0" clickable={displayTextUpdater} />
                    <Button bTitle="." clickable={displayTextUpdater} />
                    <Button bTitle="=" clickable={props.onEqualPress} />
                    <Button className="special" bTitle=" / " clickable={displayTextUpdater} />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button className="clear" bTitle="Clear" clickable={props.onClearPress} />
                </Box>

            </Box>

        </Fragment >

    );
};

export default CalcButtons;
