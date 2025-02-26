// Handle Posting Questions
document.getElementById('submitQuestion').addEventListener('click', () => {
    const questionInput = document.getElementById('questionInput');
    if (questionInput.value.trim() !== '') {
        const questionList = document.querySelector('.questions-list');
        const newQuestion = document.createElement('div');
        newQuestion.classList.add('question-item');
        newQuestion.textContent = questionInput.value;
        questionList.appendChild(newQuestion);
        questionInput.value = ''; // Clear input
    }
});

// Handle Posting Videos
document.getElementById('submitVideo').addEventListener('click', () => {
    const videoInput = document.getElementById('videoInput');
    const videoURL = videoInput.value.trim();
    if (videoURL !== '') {
        const videoList = document.querySelector('.video-list');
        const newVideo = document.createElement('div');
        newVideo.classList.add('video-item');
        const iframe = document.createElement('iframe');
        iframe.src = videoURL;
        iframe.width = '560';
        iframe.height = '315';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        newVideo.appendChild(iframe);
        videoList.appendChild(newVideo);
        videoInput.value = ''; // Clear input
    }
});
