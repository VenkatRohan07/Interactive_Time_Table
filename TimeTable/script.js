const subjects = document.querySelectorAll('.subject');
const popup = document.getElementById('popup');

subjects.forEach(sub => {
  sub.addEventListener('click', () => {
    document.getElementById('p-subject').innerText = sub.dataset.subject;
    document.getElementById('p-faculty').innerText = sub.dataset.faculty;
    document.getElementById('p-time').innerText = sub.dataset.time;
    document.getElementById('p-duration').innerText = sub.dataset.duration;
    popup.style.display = 'block';
  });
});

document.getElementById('close').onclick = () => {
  popup.style.display = 'none';
};

window.onclick = e => {
  if (e.target === popup) popup.style.display = 'none';
};
