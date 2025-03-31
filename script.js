const packageImg = document.getElementById('package');
const rI = document.getElementById('rI');
const nextBubble = document.getElementById('nextBubble');
const firstBubble = document.getElementById('firstBubble');
const next = document.getElementById('next');
const title = document.getElementById('title');
let touchTimer;
let clickCount = 0;

rI.style.display = 'none';

packageImg.addEventListener('touchstart', () => {
    touchTimer = setTimeout(() => {
        packageImg.style.display = 'none';
        rI.style.display = 'block';
        nextBubble.style.display = 'none';
        guide1.style.display = 'none';
        guide2.style.display = 'none';
    }, 750);
});

packageImg.addEventListener('touchend', () => {
    clearTimeout(touchTimer);
});

packageImg.addEventListener('touchcancel', () => {
    clearTimeout(touchTimer);
});

next.addEventListener('click', () => {
    firstBubble.style.display = 'none';
    title.style.transform = 'translate(-6px, -167px)';
    nextBubble.style.display = 'block';
});

const ok = document.getElementById('ok');
const guide1 = document.getElementById('guide1');
const guide2 = document.getElementById('guide2');

guide2.style.display = 'none';

ok.addEventListener('click', () => {
    guide1.style.display = 'none';
    guide2.style.display = 'block';
});

guide2.addEventListener('click', () => {
    guide2.style.display = 'none';
});

const infopage = document.getElementById('infopage');

infopage.style.display = 'none';

        if (packageImg) {
            packageImg.addEventListener('contextmenu', (event) => {
                event.preventDefault();
            });
        }
