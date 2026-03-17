// Dropdown ادمین
const adminBtn = document.getElementById('adminDropdownBtn');
const adminDropdown = document.getElementById('adminDropdown');

adminBtn.addEventListener('click', () => {
  adminDropdown.classList.toggle('hidden');
});

// Dropdown زبان
const langBtn = document.getElementById('langDropdownBtn');
const langDropdown = document.getElementById('langDropdown');

langBtn.addEventListener('click', () => {
  langDropdown.classList.toggle('hidden');
});

// Submenu Sidebar
function toggleSubMenu(menuId) {
  const menu = document.getElementById(menuId);
  menu.classList.toggle('hidden');
}

// بسته شدن dropdown با کلیک خارج
window.addEventListener('click', function(e) {
  if (!adminBtn.contains(e.target) && !adminDropdown.contains(e.target)) {
    adminDropdown.classList.add('hidden');
  }
  if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.add('hidden');
  }
});