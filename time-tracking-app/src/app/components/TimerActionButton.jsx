import {Button} from "@mui/material";
import PropTypes from "prop-types";

export const TimerActionButton = (props) => {
    return props.timerIsRunning ?
        (<Button variant="contained" className="" onClick={props.onStopClick}>Stop</Button>) :
        (<Button variant="contained" className="" onClick={props.onStartClick}>Start</Button>)
}

TimerActionButton.propTypes = {
    onStartClick: PropTypes.func.isRequired,
    onStopClick: PropTypes.func.isRequired
}