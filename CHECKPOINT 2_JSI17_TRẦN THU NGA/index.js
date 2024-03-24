let clocks = {}; // Store clock intervals

function startClock(clockId) {
    if (!clocks[clockId]) {
        const startTime = Date.now();
        clocks[clockId] = setInterval(() => {
            const currentTime = Date.now() - startTime;
            const formattedTime = formatTime(currentTime);
            document.getElementById(`clock${clockId}`).textContent = formattedTime;
        }, 1000);
    }
}

function stopClock(clockId) {
    clearInterval(clocks[clockId]);
    delete clocks[clockId];
    document.getElementById(`clock${clockId}`).textContent = '00:00';
}

function pauseClock(clockId) {
    clearInterval(clocks[clockId]);
    delete clocks[clockId];
}


function stopAllClocks() {
    for (const clockId in clocks) {
        stopClock(clockId);
    }
}

function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const formattedSeconds = String(seconds % 60).padStart(2, '0');
    const formattedMinutes = String(minutes % 60).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds % 1000).padStart(3, '0');
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}