import {EditableTimerList} from "../components/EditableTimerList";
import {ToggleableTimerForm} from "../components/ToggleableTimerForm";
import {useEffect, useState} from "react";
import {v4 as uuidV4} from 'uuid';
import axios from "axios";
import {Box} from "@mui/material";

export const TimerDashboard = () => {
    const [timers, setTimers] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: "/api/timers",
            proxy: {
                protocol: 'http',
                host: 'demo',
                port: 3001,
            }
        })
            .then((response) => {
            setTimers(response.data);
            console.log(response);
        })
            .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
            .then(() => {
                console.log("请求完成。")
            });
    }, []);

    const handleCreateFormSubmit = (timer) => {
        createTimer(timer);
    };

    const handleEditFormSubmit = (attrs) => {
        updateTimer(attrs);
    }

    const handleTimerTrash = (timerId) => {
        deleteTimer(timerId);
    }

    const handleStartClick = (timerId) => {
        startTimer(timerId)
    }

    const handleStopClick = (timerId) => {
        stopTimer(timerId);
    }

    const createTimer = (timer) => {
        let newTimer = {
            id: uuidV4(),
            title: timer.title || 'Unknown Timer',
            project: timer.project || 'Unknown Project',
            elapsed: 0
        };
        setTimers([...timers, newTimer]);
    }

    const updateTimer = (attrs) => {
        const newTimers = timers.map(timer => {
            if (timer.id === attrs.id) {
                // return Object.assign({}, timer, {title: attrs.title, project: attrs.project})
                return {...timer, title: attrs.title, project: attrs.project}
            } else {
                return timer;
            }
        });
        setTimers(newTimers);
    }

    const deleteTimer = (timerId) => {
        setTimers(timers.filter(timer => timer.id !== timerId))
    }

    const startTimer = (timerId) => {
        const newTimers = timers.map(timer => {
            if (timer.id === timerId) {
                return {...timer, runningSince: Date.now()}
            } else {
                return timer;
            }
        });
        setTimers(newTimers);
    }

    const stopTimer = (timerId) => {
        const newTimers = timers.map(timer => {
            if (timer.id === timerId) {
                const lastElapsed = Date.now() - timer.runningSince;
                return {...timer, elapsed: (timer.elapsed + lastElapsed), runningSince: null}
            } else {
                return timer;
            }
        });
        setTimers(newTimers);
    }

    return (
        <Box id="TimerDashboard">
            <EditableTimerList
                timers={timers}
                onFormSubmit={handleEditFormSubmit}
                onTrashClick={handleTimerTrash}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
            />
            <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
        </Box>
    );
}