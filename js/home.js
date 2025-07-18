// Home Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Toggle dropdown menu
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown');
    
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
    
    // Add animation to welcome section
    const welcomeSection = document.querySelector('.welcome-section');
    if (welcomeSection) {
        welcomeSection.classList.add('fade-in');
    }
    
    // Add animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.2)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    }
    
    // Add animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        // Add delay based on index for staggered animation
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
