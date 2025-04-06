document.addEventListener('DOMContentLoaded', () => {
    // Add random question marks for Riddler flair
    setInterval(() => {
        const hackDiv = document.querySelector('.riddler-hack');
        const qMark = document.createElement('span');
        qMark.textContent = '?';
        qMark.style.position = 'absolute';
        qMark.style.left = Math.random() * 90 + '%';
        qMark.style.top = Math.random() * 90 + '%';
        hackDiv.appendChild(qMark);
        setTimeout(() => qMark.remove(), 1000);
    }, 500);
});