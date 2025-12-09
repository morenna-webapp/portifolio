// Seleção de Elementos
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');
const mobileToggle = document.querySelector('.mobile-toggle');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-menu a');

// --- 1. Lógica do Tema (Rosa/Branco vs Rosa/Preto) ---
const currentTheme = localStorage.getItem('theme-morenna');

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    }
}

themeBtn.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');

    if (theme === 'dark') {
        body.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
        localStorage.setItem('theme-morenna', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        localStorage.setItem('theme-morenna', 'dark');
    }
});

// --- 2. Menu Mobile (Abrir/Fechar Sidebar) ---
mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // Troca o ícone do menu (barras <-> X)
    const toggleIcon = mobileToggle.querySelector('i');
    if (sidebar.classList.contains('active')) {
        toggleIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        toggleIcon.classList.replace('fa-times', 'fa-bars');
    }
});

// Fecha o menu ao clicar em um link (no mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            sidebar.classList.remove('active');
            mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });
});