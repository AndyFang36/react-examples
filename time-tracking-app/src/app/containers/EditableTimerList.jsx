import {EditableTimer} from "./EditableTimer";
import {List, ListItem} from "@mui/material";
import PropTypes from "prop-types"
import "../../assets/css/EditableTimerList.css";

export const EditableTimerList = (props) => {
    return (
        <List id="EditableTimerList">
            {props.timers.map(timer => (
                <ListItem className="editableTimer" key={"timer-" + timer.id} id={"Timer" + timer.id}>
                    <EditableTimer
                        id={timer.id}
                        title={timer.title}
                        project={timer.project}
                        elapsed={timer.elapsed}
                        runningSince={timer.runningSince}
                        onFormSubmit={props.onFormSubmit}
                        onTrashClick={props.onTrashClick}
                        onStartClick={props.onStartClick}
                        onStopClick={props.onStopClick}
                    />
                </ListItem>
            ))}
        </List>
    );
}

EditableTimerList.propTypes = {
    timers: PropTypes.array.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onTrashClick: PropTypes.func.isRequired,
    onStartClick: PropTypes.func.isRequired,
    onStopClick: PropTypes.func.isRequired
}