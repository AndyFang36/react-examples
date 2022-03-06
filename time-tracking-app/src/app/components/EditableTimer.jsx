import {useState} from "react";
import {TimerForm} from "./TimerForm";
import {Timer} from "./Timer";

export const EditableTimer = (props) => {
    const [editFormOpen, setEditFormOpen] = useState(false);

    const handleEditClick = () => {
        setEditFormOpen(true);
    }

    const handleEditCancel = () => {
        setEditFormOpen(false);
    }

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
                onFormClose={handleEditCancel}
            />
            :
            <Timer
                id={props.id}
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
                onEditClick={handleEditClick}
                onTrashClick={props.onTrashClick}
                onStartClick={props.onStartClick}
                onStopClick={props.onStopClick}
            />
    );
}