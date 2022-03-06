import {useEffect, useState} from "react";
import {timeUtils} from "../../common/utils/TimeUtils";
import {TimerActionButton} from "./TimerActionButton";
import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {Assignment as AssignmentIcon, Delete as DeleteIcon, Edit as EditIcon} from "@mui/icons-material";
import "../../assets/css/Timer.css";

export const Timer = (props) => {
    const [elapsedString, setElapsedString] = useState(timeUtils.renderElapsedString(props.elapsed, props.runningSince));

    useEffect(() => {
        setInterval(() => {
            setElapsedString(timeUtils.renderElapsedString(props.elapsed, props.runningSince));
        }, 1000);
    }, [props.elapsed, props.runningSince])

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
            <div>
                <CardHeader>
                    <AssignmentIcon/> {props.title}
                </CardHeader>
                <CardContent>
                    <p>{props.project}.</p>
                    <h5>{elapsedString}</h5>
                    <p>
                        <EditIcon onClick={props.onEditClick}/>
                        <DeleteIcon onClick={handleTrashClick}/>
                    </p>
                </CardContent>
                <CardActions>
                    <TimerActionButton
                        timerIsRunning={!!props.runningSince}  /* 用两个!!就可以将变量转化为对应布尔值 */
                        onStartClick={handleStartClick}
                        onStopClick={handleStopClick}
                    />
                </CardActions>
            </div>
        </Card>
    );
}