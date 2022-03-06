import {useState} from "react";
import {Box, Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {Delete as DeleteIcon, Update as UpdateIcon} from "@mui/icons-material";

export const TimerForm = (props) => {
    const [title, setTitle] = useState(props.title || "");
    const [project, setProject] = useState(props.project || "");

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
                    <label>Title</label>
                    <input type="text"
                           onChange={(e) => setTitle(e.target.value)}
                           defaultValue={props.title}
                           placeholder="Enter title here..."
                           required/>
                </Box>
                <Box>
                    <label>Project</label>
                    <input onChange={(e) => setProject(e.target.value)}
                           type="text"
                           defaultValue={props.project}
                           placeholder="Enter project here..."
                           required/>
                </Box>
                <CardActions>
                    <Button variant="contained" onClick={handleSubmit}>{props.id ? "Update" : "Create"}</Button>
                    <Button variant="contained" onClick={props.onFormClose}>Cancel</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}