const convertTimestamp = (timestamp: number) => {
    let output = "";
    if (timestamp < 60) {
        if (timestamp < 10) {
            output = `0:0${Math.floor(timestamp)}`
        } else {
            output = `0:${Math.floor(timestamp)}`
        }
    } else {
        const minutes = Math.floor(timestamp / 60);
        const seconds = Math.floor(timestamp - (minutes * 60));
        if (seconds < 10) {
            output = `${minutes}:0${seconds}`
        } else {
            output = `${minutes}:${seconds}`
        }
    }

    return output;
}

export default convertTimestamp;