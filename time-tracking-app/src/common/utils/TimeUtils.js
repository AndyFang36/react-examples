class TimeUtils {
    /*
    transformMicroseconds(microseconds) {
        const
            days = parseInt(microseconds / (1000 * 60 * 60 * 24)),
            hours = parseInt((microseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = parseInt((microseconds % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = (microseconds % (1000 * 60)) / 1000;
        return days + " Day " + hours + " : " + minutes + " : " + seconds;
    }
    */

    renderElapsedString(elapsed, runningSince) {
        let totalElapsed = elapsed;
        if (runningSince) {
            totalElapsed += Date.now() - runningSince;
        }
        return this.millisecondsToHuman(totalElapsed);
    }

    millisecondsToHuman(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        const hours = Math.floor(ms / 1000 / 60 / 60);

        return [
            this.pad(hours.toString(), 2),
            this.pad(minutes.toString(), 2),
            this.pad(seconds.toString(), 2),
        ].join(':');
    }

    pad(numberString, size) {
        let padded = numberString;
        while (padded.length < size) padded = `0${padded}`;
        return padded;
    }
}

export const timeUtils = new TimeUtils();