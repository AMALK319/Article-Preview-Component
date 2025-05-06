const shareButton = document.getElementById('shareButton')
const shareBox = document.getElementById('shareBox')
let clicked = false


shareButton.onclick = (e) => {
  console.log('You clicked me!');
  shareBox.style.display = clicked ? 'none' : 'flex'
  clicked = !clicked
}