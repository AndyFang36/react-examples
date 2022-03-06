import {TimerForm} from "../components/TimerForm";
import {useState} from "react";
import {Box, Button} from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material";
import "../../assets/css/ToggleableTimerForm.css";

export const ToggleableTimerForm = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleFormSubmit = (timer) => {
        props.onFormSubmit(timer);
        setIsOpen(false);
    }

    return (
        <Box id="ToggleableTimerForm">
            {isOpen ?
                <TimerForm onFormSubmit={handleFormSubmit} onFormClose={() => setIsOpen(false)}/>
                :
                <Box>
                    <Button onClick={() => {setIsOpen(true);}}><AddIcon/></Button>
                </Box>
            }
        </Box>
    );
}