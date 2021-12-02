window.addEventListener('load', () => {
    let progressBars = document.querySelectorAll('.progress-bar');

    let values = [
        '80%',
        '70%',
        '70%',
        '80%',
        '60%',
        '70%'
    ];

    progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
    })
});