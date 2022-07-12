const modal = document.getElementById('modal');
const menuButtonClosed = document.getElementById('menu-status-close');
const menuButtonOpened = document.getElementById('menu-status-open');

function openMobileMenu() {
  modal.style.display = 'block';
}

function closeMobileMenu() {
    modal.style.display = 'none';
}

menuButtonClosed.addEventListener('click', openMobileMenu);
menuButtonOpened.addEventListener('click', closeMobileMenu);
