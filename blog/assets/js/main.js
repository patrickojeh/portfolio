function randomTextSelection() {
  const colors = ['#0086B3', 'teal', '#999988'];
  const randomColor = Math.floor(Math.random() * colors.length);
  document.documentElement.style.setProperty('--selection-bg', colors[randomColor])
}

window.addEventListener('mousedown', randomTextSelection);