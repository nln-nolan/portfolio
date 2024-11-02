// Trainer Cursor
const container = document.querySelector('.trainer-cursor');

container.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.className = 'star';

    let x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;
    x = x - 11
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    container.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 500);
});