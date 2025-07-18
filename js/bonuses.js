// Bonuses Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sample bonus data (in a real app, this would come from an API)
    const bonuses = [
        {
            id: 1,
            icon: 'fa-star',
            title: 'Welcome Bonus',
            description: 'Get started with our exclusive welcome package for new members.',
            buttonText: 'Claim Now',
            status: 'New'
        },
        {
            id: 2,
            icon: 'fa-medal',
            title: 'Daily Rewards',
            description: 'Log in daily to claim special rewards and boost your gaming experience.',
            buttonText: 'Claim Now',
            status: 'Hot'
        },
        {
            id: 3,
            icon: 'fa-users',
            title: 'Referral Bonus',
            description: 'Invite friends and earn exclusive rewards for every successful referral.',
            buttonText: 'Invite Friends',
            status: 'Popular'
        }
    ];
    
    // Animate bonus cards on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.bonus-card');
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial animation
    window.addEventListener('load', () => {
        const cards = document.querySelectorAll('.bonus-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        });
        
        // Trigger animation after a short delay
        setTimeout(animateOnScroll, 300);
    });
    
    // Animate on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Handle claim button clicks
    const claimButtons = document.querySelectorAll('.claim-button');
    claimButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the bonus card
            const card = this.closest('.bonus-card');
            
            // Add pulse animation
            this.innerHTML = '<i class="fas fa-check"></i> Claimed!';
            this.style.backgroundColor = '#28a745';
            this.style.pointerEvents = 'none';
            
            // Add claimed class to card
            card.classList.add('claimed');
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Bonus claimed successfully!';
            
            // Add to DOM
            document.body.appendChild(successMessage);
            
            // Remove after animation
            setTimeout(() => {
                successMessage.classList.add('show');
                
                setTimeout(() => {
                    successMessage.classList.remove('show');
                    
                    setTimeout(() => {
                        successMessage.remove();
                    }, 300);
                }, 3000);
            }, 100);
        });
    });
    
    // Add hover effect to bonus cards
    const bonusCards = document.querySelectorAll('.bonus-card');
    bonusCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
