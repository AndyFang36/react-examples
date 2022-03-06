import {useEffect, useState} from "react";
import {timeUtils} from "../../common/utils/TimeUtils";
import {TimerActionButton} from "./TimerActionButton";
import {Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {Assignment as AssignmentIcon, Delete as DeleteIcon, Edit as EditIcon} from "@mui/icons-material";
import "../../assets/css/Timer.css";

export const Timer = (props) => {
    const [elapsedString, setElapsedString] = useState(
        timeUtils.renderElapsedString(props.elapsed, props.runningSince)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedString(timeUtils.renderElapsedString(props.elapsed, props.runningSince));
        }, 1000);
        return () => clearInterval(interval);
    });

    const handleTrashClick = () => {
        props.onTrashClick(props.id);
    }

    const handleStartClick = () => {
        props.onStartClick(props.id);
    }

    const handleStopClick = () => {
        props.onStopClick(props.id);
    }

    return (
        <Card id={"Timer" + props.id}>
            <CardHeader avatar={<AssignmentIcon/>} title={props.title}/>
            <CardContent>
                <Typography>{props.project}.</Typography>
                <h4>{elapsedString}</h4>
                <Typography>
                    <EditIcon onClick={props.onEditClick} className="editIcon"/>
                    <DeleteIcon onClick={handleTrashClick} className="deleteIcon"/>
                </Typography>
            </CardContent>
            <CardActions>
                <TimerActionButton
                    timerIsRunning={!!props.runningSince}  /* 用两个!!就可以将变量转化为对应布尔值 */
                    onStartClick={handleStartClick}
                    onStopClick={handleStopClick}
                />
            </CardActions>
        </Card>
    );
}