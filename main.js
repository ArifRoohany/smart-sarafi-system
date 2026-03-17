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

  // آیکن تغییر جهت می‌دهد
  const icon = sidebarToggle.querySelector('i');
  icon.classList.toggle('fa-angle-double-left');
  icon.classList.toggle('fa-angle-double-right');

  // محتوای اصلی فضای خالی را پر کند
  mainContent.classList.toggle('main-collapsed');
});

// Toggle زیرمنوی حواله
const hawalaBtn = document.getElementById('hawalaBtn');
const hawalaSubmenu = document.getElementById('hawalaSubmenu');
const hawalaIcon = document.getElementById('hawalaIcon');

hawalaBtn.addEventListener('click', () => {
  hawalaSubmenu.classList.toggle('hidden');
  hawalaIcon.classList.toggle('rotate-180'); // ایکن نرم بچرخد
});

// باز کردن مدال ایجاد حواله جدید
const hawalaModal = document.getElementById('hawalaModal');
const hawalaSubmenuItems = hawalaSubmenu.querySelectorAll('a');

hawalaSubmenuItems.forEach(item => {
  if (item.textContent.includes('ایجاد حواله جدید')) {
    item.addEventListener('click', () => {
      hawalaModal.classList.remove('hidden');
    });
  }
});

// بستن مدال
const closeHawalaModal = document.getElementById('closeHawalaModal');
closeHawalaModal.addEventListener('click', () => {
  hawalaModal.classList.add('hidden');
});

// بستن مدال با کلیک روی بک‌گراند
hawalaModal.addEventListener('click', (e) => {
  if (e.target === hawalaModal) {
    hawalaModal.classList.add('hidden');
  }
});






//====================== مدال جزئیات حواله
const hawalaDetailModal = document.getElementById('hawalaDetailModal');
const closeHawalaDetailModal = document.getElementById('closeHawalaDetailModal');
const hawalaTableBody = document.getElementById('hawalaTableBody');

// باز شدن مدال جزئیات
hawalaTableBody.querySelectorAll('tr').forEach(row => {
  const viewBtn = row.querySelector('button i.fa-eye').parentElement;
  viewBtn.addEventListener('click', () => {
    document.getElementById('detailHawalaId').textContent = row.cells[0].textContent;
    document.getElementById('detailSender').textContent = row.cells[1].textContent;
    document.getElementById('detailReceiver').textContent = row.cells[2].textContent;
    document.getElementById('detailAmount').textContent = row.cells[3].textContent;
    document.getElementById('detailCurrency').textContent = row.cells[4].textContent;
    document.getElementById('detailStatus').textContent = row.cells[5].textContent;
    document.getElementById('detailDate').textContent = row.cells[6].textContent;

    hawalaDetailModal.classList.remove('hidden');
  });
});

// بستن مدال جزئیات
closeHawalaDetailModal.addEventListener('click', () => {
  hawalaDetailModal.classList.add('hidden');
});

// بستن مدال با کلیک روی بک‌گراند
hawalaDetailModal.addEventListener('click', (e) => {
  if (e.target === hawalaDetailModal) {
    hawalaDetailModal.classList.add('hidden');
  }
});









hawalaTableBody.querySelectorAll('tr').forEach(row => {
  const completeBtn = row.querySelector('button i.fa-check').parentElement;
  const cancelBtn = row.querySelector('button i.fa-times').parentElement;

  // تکمیل حواله
  completeBtn.addEventListener('click', () => {
    row.cells[5].textContent = 'تکمیل شده';
    row.cells[5].classList.remove('text-yellow-600', 'text-red-600');
    row.cells[5].classList.add('text-green-600');
  });

  // لغو حواله
  cancelBtn.addEventListener('click', () => {
    row.cells[5].textContent = 'لغو شده';
    row.cells[5].classList.remove('text-yellow-600', 'text-green-600');
    row.cells[5].classList.add('text-red-600');
  });
});






// پیدا کردن لینک "لیست حواله‌ها"
const hawalaListLink = Array.from(hawalaSubmenu.querySelectorAll('a')).find(a =>
  a.textContent.includes('لیست حواله‌ها')
);

// بخش لیست حواله‌ها
const hawalaListSection = document.getElementById('hawalaListSection');

hawalaListLink.addEventListener('click', (e) => {
  e.preventDefault();

  // اول همه بخش‌های اصلی را مخفی کن
  document.querySelectorAll('main > div').forEach(div => div.classList.add('hidden'));

  // بعد فقط بخش لیست حواله‌ها را نمایش بده
  if(hawalaListSection) {
    hawalaListSection.classList.remove('hidden');
  }

  // اگر مدال باز است، ببندش
  hawalaModal.classList.add('hidden');
});

// فیلتر و جستجو در جدول حواله‌ها
const hawalaSearch = document.getElementById('hawalaSearch');
const hawalaSearchBtn = document.getElementById('hawalaSearchBtn');
const hawalaStatusFilter = document.getElementById('hawalaStatusFilter');
// const hawalaTableBody = document.getElementById('hawalaTableBody');

// فیلتر جدول بر اساس وضعیت
hawalaStatusFilter.addEventListener('change', () => {
  const status = hawalaStatusFilter.value.toLowerCase();
  const rows = hawalaTableBody.querySelectorAll('tr');
  rows.forEach(row => {
    const rowStatus = row.cells[5].textContent.toLowerCase();
    if (status === 'all' || rowStatus === status) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

// جستجو در جدول
hawalaSearchBtn.addEventListener('click', () => {
  const query = hawalaSearch.value.toLowerCase();
  const rows = hawalaTableBody.querySelectorAll('tr');
  rows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(query) ? '' : 'none';
  });
});




// تاریخچه حواله ها ========================================
const hawalaHistoryLink = Array.from(hawalaSubmenu.querySelectorAll('a')).find(a =>
  a.textContent.includes('تاریخچه')
);

const hawalaHistorySection = document.getElementById('hawalaHistorySection');

hawalaHistoryLink.addEventListener('click', (e) => {

  e.preventDefault();

  document.querySelectorAll('main > div').forEach(div => div.classList.add('hidden'));

  hawalaHistorySection.classList.remove('hidden');

});