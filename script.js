document.querySelectorAll('.video-item video').forEach(video => {
    // Play the video on mouse over
    video.addEventListener('mouseover', () => {
        video.play();
    });

    // Pause and reset the video on mouse out
    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0; // Reset the video to the start
    });
});
