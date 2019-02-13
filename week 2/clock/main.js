function getTime() {
    const currentTime = new Date();
    cHours = currentTime.getHours();
    cMins = currentTime.getMinutes();
    cSeconds = currentTime.getSeconds();
    return {
        hours: cHours,
        mins: cMins,
        seconds: cSeconds
    };
}

function calcHourAngle() {
    if (getTime().hours >= 12) {
        hours12 = getTime().hours - 12;
    } else {
        hours12 = getTime().hours;
    }
    hoursToSecs = hours12 * 3600;
    minsToSecs = getTime().mins * 60;
    hourAngle = ((hoursToSecs + minsToSecs + getTime().seconds) / 43200) * 360;
    return (hourAngle - 90).toFixed(2);
}

function calcMinAngle() {
    minsToSecs = getTime().mins * 60;
    minsAngle = ((minsToSecs + getTime().seconds) / 3600) * 360;
    return (minsAngle - 90).toFixed(2);
}

function calcSecondAngle() {
    secsAngle = (getTime().seconds / 60) * 360;
    return (secsAngle - 90).toFixed(2);
}

function updateHand(hand, angle) {
    document
        .getElementById(hand)
        .setAttribute("style", `transform: rotate(${angle}deg)`);
}

function showTheHours() {
    updateHand("hours", calcHourAngle());
}
function showTheMinutes() {
    updateHand("minutes", calcMinAngle());
}
function showTheSeconds() {
    updateHand("seconds", calcSecondAngle());
}

function showTime() {
    // update on page load
    showTheHours();
    showTheMinutes();
    showTheSeconds();

    // update after interval
    setInterval(showTheHours, 25000);
    setInterval(showTheMinutes, 15000);
    setInterval(showTheSeconds, 1000);
}

showTime();