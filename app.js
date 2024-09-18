const translateXInput = document.getElementById('translateX');
const translateYInput = document.getElementById('translateY');
const rotateInput = document.getElementById('rotate');
const scaleInput = document.getElementById('scale');
const skewXInput = document.getElementById('skewX');
const skewYInput = document.getElementById('skewY');
const opacityInput = document.getElementById('opacity');
const box = document.querySelector('.box');

function updateTransformations() {
  const translateX = translateXInput.value;
  const translateY = translateYInput.value;
  const rotate = rotateInput.value;
  const scale = scaleInput.value;
  const skewX = skewXInput.value;
  const skewY = skewYInput.value;
  const opacity = opacityInput.value;

  box.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale}) skew(${skewX}deg, ${skewY}deg)`;
  box.style.opacity = opacity;
}

[translateXInput, translateYInput, rotateInput, scaleInput, skewXInput, skewYInput, opacityInput].forEach(input => {
  input.addEventListener('input', updateTransformations);
});

updateTransformations();
