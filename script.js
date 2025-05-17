
document.getElementById('forgiveBtn').addEventListener('click', () => {
    const container = document.getElementById('heartContainer');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('span');
        heart.textContent = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
    document.getElementById('message').classList.remove('hidden');
});
