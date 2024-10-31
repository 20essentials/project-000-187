const d = document;
let lastElement = null;
const N_SQUARES = 4000;
for (let i = 0; i < N_SQUARES; i++) {
  const $square = d.createElement('div');
  $square.classList.add('square');
  d.body.appendChild($square);
}

const start = e => {
  const move = e => {
    const touch = e.touches[0];
    const element = d.elementFromPoint(touch.clientX, touch.clientY);
    if (!element) return;

    if (element && element.classList.contains('square')) {
      if (lastElement && lastElement !== element) {
        lastElement.classList.remove('active');
      }

      element.classList.add('active');
      lastElement = element;
    }
  };

  const end = () => {
    d.removeEventListener('touchmove', move);
    d.removeEventListener('touchend', end);
  };

  d.addEventListener('touchmove', move, { passive: true });
  d.addEventListener('touchend', end, { passive: true });
};

d.addEventListener('touchstart', start, { passive: true });
