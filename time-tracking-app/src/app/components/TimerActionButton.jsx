export const TimerActionButton = (props) => {
    return props.timerIsRunning ?
        (<button className="" onClick={props.onStopClick}>Stop</button>) :
        (<button className="" onClick={props.onStartClick}>Start</button>)
}