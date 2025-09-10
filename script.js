// ------ GRADIENT BACKGROUND ------

function sizePageBg() {
    const bg = document.getElementById('gradient-background');
    // docHeight is the full height of the page/viewport
    const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight
    );
    bg.style.height = docHeight + 'px';
}

window.addEventListener('load', sizePageBg);  // after the page finishes loading
window.addEventListener('resize', sizePageBg);  // any time window changes size

// ------ CAT ANIMATION ------

const cat = document.querySelector('.cat');
cat.addEventListener('click', () => {
  cat.classList.remove('animate');  // reset if already animating
  cat.offsetWidth;  // force reflow
  cat.classList.add('animate'); // retrigger animation
});