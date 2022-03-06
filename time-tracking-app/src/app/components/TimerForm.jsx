import {useState} from "react";
import {Box, Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {Delete as DeleteIcon, Update as UpdateIcon} from "@mui/icons-material";

export const TimerForm = (props) => {
    const [title, setTitle] = useState(props.title || "");
    const [project, setProject] = useState(props.project || "");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleProjectChange = (e) => {
        setProject(e.target.value);
    }

    const handleSubmit = () => {
        props.onFormSubmit({
            id: props.id,
            title: title,
            project: project
        });
    }

    return (
        <Card>
            <CardHeader>
                <Typography variant="h4" component="h4">
                    {props.id ? (<><UpdateIcon/>Update</>) : (<><DeleteIcon/>Delete</>)} Timer
                </Typography>
            </CardHeader>
            <CardContent>
                <Box>
                    <span>Title</span>
                    <input onChange={handleTitleChange}
                           type="text"
                           defaultValue={props.title}
                           placeholder="Enter title here..."
                           required/>
                </Box>
                <Box>
                    <span>Project</span>
                    <input onChange={handleProjectChange}
                           type="text"
                           defaultValue={props.project}
                           placeholder="Enter project here..."
                           required/>
                </Box>
                <CardActions>
                    <Button onClick={handleSubmit}>{props.id ? "Update" : "Delete"}</Button>
                    <Button onClick={props.onFormClose}>Cancel</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}