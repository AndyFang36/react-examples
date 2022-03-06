import {EditableTimer} from "./EditableTimer";
import {List, ListItem} from "@mui/material";

export const EditableTimerList = (props) => {
    return (
        <List className="list-group">
            {props.timers.map(timer => (
                <ListItem key={"timer-" + timer.id} id={"Timer" + timer.id}>
                    <EditableTimer
                        key={timer.id}
                        id={timer.id}
                        title={timer.title}
                        project={timer.project}
                        elapsed={timer.elapsed}
                        runningSince={timer.runningSince}
                        onFormSubmit={this.props.onFormSubmit}
                        onTrashClick={this.props.onTrashClick}
                        onStartClick={this.props.onStartClick}
                        onStopClick={this.props.onStopClick}
                    />
                </ListItem>
            ))}
        </List>
    );
}