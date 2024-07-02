document.addEventListener('DOMContentLoaded', () => {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const day = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('current-time').innerText = utcTime;
        document.getElementById('current-day').innerText = day;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
});
