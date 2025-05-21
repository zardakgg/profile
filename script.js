const GITHUB_REPO_URL = "https://github.com/zardakgg/profile";

const menu = document.getElementById('custom-context-menu');
const copyBtn = document.getElementById('copy-website');
const githubBtn = document.getElementById('view-github');

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();

  // First, show menu to get its size
  menu.style.display = 'block';
  menu.style.left = '0px';
  menu.style.top = '0px';

  const menuRect = menu.getBoundingClientRect();
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  let left = e.clientX;
  let top = e.clientY;

  // Adjust if menu would overflow right edge
  if (left + menuRect.width > winWidth) {
    left = winWidth - menuRect.width - 4;
  }
  // Adjust if menu would overflow bottom edge
  if (top + menuRect.height > winHeight) {
    top = winHeight - menuRect.height - 4;
  }

  menu.style.left = left + 'px';
  menu.style.top = top + 'px';
});

document.addEventListener('click', function() {
  menu.style.display = 'none';
});

copyBtn.addEventListener('click', function(e) {
  navigator.clipboard.writeText(window.location.href)
    .then(() => alert('Website URL copied!'));
  menu.style.display = 'none';
  e.stopPropagation();
});

githubBtn.addEventListener('click', function(e) {
  window.open(GITHUB_REPO_URL, '_blank');
  menu.style.display = 'none';
  e.stopPropagation();
});

window.addEventListener('DOMContentLoaded', function() {
  const status = document.getElementById('status-text');
  const text = status.textContent.trim();
  status.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      status.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60); // typing speed in ms
    }
  }
  type();
});
