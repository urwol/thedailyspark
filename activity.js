const userActivity = [];

document.addEventListener('click', (event) => {
    const element = event.target.tagName;
    const time = new Date().toISOString();
    userActivity.push({ type: 'click', element, time });
    console.log('Activity logged:', { type: 'click', element, time });
});

window.addEventListener('beforeunload', () => {
    console.log('Final session log:', userActivity);
    // Optionally send to server here
});
