import {EditableTimerList} from "../components/EditableTimerList";
import {ToggleableTimerForm} from "../components/ToggleableTimerForm";
import {useEffect, useState} from "react";
import {v4 as uuidV4} from 'uuid';
import axios from "axios";

export const TimerDashboard = () => {
    const [timers, setTimers] = useState([]);

    useEffect(() => {
        axios
            .get('demo:3001/api/timers')
            .then((response) => {
                setTimers(response.data);
                console.log(response);
            })
            .catch((error) => {
                if (error.response) {
                    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // 请求已经成功发起，但没有收到响应
                    // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
                    // 而在node.js中是 http.ClientRequest 的实例
                    console.log(error.request);
                } else {
                    // 发送请求时出了点问题
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
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {title: attrs.title, project: attrs.project})
                } else {
                    return timer;
                }
            })
        });
    }

    const deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        });
    }

    const startTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {runningSince: Date.now()})
                } else {
                    return timer;
                }
            })
        });
    }

    const stopTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === timerId) {
                    const lastElapsed = Date.now() - timer.runningSince;
                    return Object.assign({}, timer, {elapsed: timer.elapsed + lastElapsed, runningSince: null});
                } else {
                    return timer;
                }
            })
        });
    }

    return (
        <div id="TimerDashboard">
            <EditableTimerList
                timers={this.state.timers}
                onFormSubmit={handleEditFormSubmit}
                onTrashClick={handleTimerTrash}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
            />
            <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
        </div>
    );
}