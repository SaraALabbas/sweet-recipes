// الحصول على الأيقونة والقائمة
const menuIcon = document.querySelector('.list_icon');
const sideMenu = document.querySelector('.side-menu');




// إضافة حدث عند الضغط على الأيقونة
menuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});
function toggleSubMenu(index) {
    const submenu = document.getElementById(`submenu-${index}`);
    const icon = document.getElementById(`icon-${index}`);
  
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
      icon.textContent = '+';
    } else {
      submenu.style.display = 'block';
      icon.textContent = '-';
    }
  }