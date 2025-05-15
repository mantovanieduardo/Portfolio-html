// Script para navegação responsiva e interações
document.addEventListener('DOMContentLoaded', function() {
    // Menu de navegação responsivo
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Acessibilidade - alterna o atributo aria-expanded
            const expanded = mainNav.classList.contains('active');
            navToggle.setAttribute('aria-expanded', expanded);
        });
    }
    
    // Fechar menu ao clicar em um link (para mobile)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Animação suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Ajuste para o header fixo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Adicionar classe ativa ao link de navegação da página atual
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.main-nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Formulário de contato (se existir)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aqui você adicionaria a lógica para enviar o formulário
            // Como é apenas visual, vamos apenas mostrar uma mensagem
            alert('Mensagem enviada com sucesso! (Simulação)');
            contactForm.reset();
        });
    }
});
