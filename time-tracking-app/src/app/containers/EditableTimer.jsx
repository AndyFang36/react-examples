import {useState} from "react";
import {TimerForm} from "../components/TimerForm";
import {Timer} from "../components/Timer";

export const EditableTimer = (props) => {
    const [editFormOpen, setEditFormOpen] = useState(false);

    const handleSubmit = (timer) => {
        props.onFormSubmit(timer);
        setEditFormOpen(false);
    }

    return (
        editFormOpen ?
            <TimerForm
                id={props.id}
                title={props.title}
                project={props.project}
                onFormSubmit={handleSubmit}
                onFormClose={() => setEditFormOpen(false)}
            />
            :
            <Timer
                id={props.id}
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
                onEditClick={() => setEditFormOpen(true)}
                onTrashClick={props.onTrashClick}
                onStartClick={props.onStartClick}
                onStopClick={props.onStopClick}
            />
    );
}