import {useState} from "react";
import {TimerForm} from "./TimerForm";
import {Timer} from "./Timer";

export const EditableTimer = (props) => {
    const [editFormOpen, setEditFormOpen] = useState(false);

    const handleEditClick = () => {
        openForm();
    }

    const handleEditCancel = () => {
        closeForm();
    }

    const handleSubmit = (timer) => {
        props.onFormSubmit(timer);
        closeForm();
    }

    const openForm = () => {
        setEditFormOpen(true);
    }

    const closeForm = () => {
        setEditFormOpen(false);
    }

    return editFormOpen ?
        <TimerForm
            id={props.id}
            title={props.title}
            project={props.project}
            onFormSubmit={handleSubmit}
            onFormClose={handleEditCancel}
        /> :
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
        />;
}