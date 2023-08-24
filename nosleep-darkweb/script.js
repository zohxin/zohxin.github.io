let blinkCount = 0;

function checkResponse() {
  const response = document.getElementById('response').value.trim().toLowerCase();
  const audio = document.getElementById('audio');
  const gif = document.getElementById('gif');
  const result = document.getElementById('result');
  
  if (response === "what also seeks me") {
    audio.play();
    gif.classList.add('gif-animation');
    result.style.display = 'none';
  } else {
    result.innerText = 'ye shalt not attain anything but only if it also seeketh thou';
    result.style.display = 'block';
    result.style.animation = 'blinkAnimation 0.5s linear 15';
  }
}

const gifElement = document.getElementById('gif');
gifElement.addEventListener('animationend', () => {
  gifElement.classList.remove('gif-animation');
});
