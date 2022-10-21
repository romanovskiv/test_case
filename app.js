let getSpans = document.querySelector('.options').querySelectorAll('span');

if (getSpans.length > 3) {
  let arr = Array.from(getSpans);
  arr.splice(3, getSpans.length - 1).forEach((el) => (el.style.display = 'none'));

  let btn = document.createElement('span');
  btn.classList = 'option option-btn';
  btn.innerText = 'ещё...';
  document.querySelector('.options').appendChild(btn);
}

if (document.querySelector('.option-btn')) {
  let arr = Array.from(getSpans);

  document.querySelector('.option-btn').addEventListener('click', () => {
    arr.splice(3, getSpans.length - 1).forEach((el) => (el.style.display = 'block'));
    document.querySelector('.option-btn').remove();
  });
}
