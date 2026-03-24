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

// بسته شدن dropdown با کلیک خارج
window.addEventListener('click', function(e) {
  if (!adminBtn.contains(e.target) && !adminDropdown.contains(e.target)) {
    adminDropdown.classList.add('hidden');
  }
  if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.add('hidden');
  }
});
// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('main');
const sidebarToggle = document.getElementById('sidebarToggle');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-collapsed');
  mainContent.classList.toggle('main-collapsed');

  const icon = sidebarToggle.querySelector('i');
  icon.classList.toggle('fa-angle-double-left');
  icon.classList.toggle('fa-angle-double-right');
});

// Transactions dropdown
const transactionBtn = document.getElementById("transactionsBtn");
const transactionMenu = document.getElementById("transactionsMenu");
const transactionArrow = document.getElementById("transactionsArrow");

transactionBtn.addEventListener("click", () => {
  transactionMenu.classList.toggle("hidden");
  transactionArrow.classList.toggle("rotate-180");
});

// Settings dropdown
const settingsBtn = document.getElementById("settingsBtn");
const settingsMenu = document.getElementById("settingsMenu");
const settingsArrow = document.getElementById("settingsArrow");

settingsBtn.addEventListener("click", () => {
  settingsMenu.classList.toggle("hidden");
  settingsArrow.classList.toggle("rotate-180");
});


