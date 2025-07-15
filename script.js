// Enhanced Birthday Website with Special Effects

// Add sparkle effect to the letter
function addSparkles() {
    const letterContainer = document.querySelector('.letter-container');
    if (!letterContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '1rem';
        sparkle.style.color = '#ff6b6b';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10';
        sparkle.style.opacity = '0';
        sparkle.style.animation = `sparkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        letterContainer.appendChild(sparkle);
    }
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
    }
`;
document.head.appendChild(sparkleStyle);

// Enhanced floating elements with more variety
function enhanceFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    if (!floatingContainer) return;
    
    const additionalIcons = ['🎀', '🌹', '💎', '🏆', '🎪', '🎭', '🎨', '🎪'];
    
    additionalIcons.forEach((icon, index) => {
        const newIcon = document.createElement('div');
        newIcon.className = 'floating-icon';
        newIcon.textContent = icon;
        newIcon.style.top = Math.random() * 80 + 10 + '%';
        newIcon.style.left = Math.random() * 80 + 10 + '%';
        newIcon.style.animationDelay = (index + 5) + 's';
        newIcon.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
        
        floatingContainer.appendChild(newIcon);
    });
}

// Add heart rain effect
function createHeartRain() {
    const heartContainer = document.createElement('div');
    heartContainer.style.position = 'fixed';
    heartContainer.style.top = '0';
    heartContainer.style.left = '0';
    heartContainer.style.width = '100%';
    heartContainer.style.height = '100%';
    heartContainer.style.pointerEvents = 'none';
    heartContainer.style.zIndex = '9998';
    
    document.body.appendChild(heartContainer);
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'absolute';
            heart.style.fontSize = '1.5rem';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.animation = `heartFall ${Math.random() * 3 + 2}s linear forwards`;
            heart.style.opacity = '0.8';
            
            heartContainer.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5000);
        }, i * 200);
    }
    
    setTimeout(() => {
        if (heartContainer.parentNode) {
            heartContainer.parentNode.removeChild(heartContainer);
        }
    }, 10000);
}

// Add heart fall animation CSS
const heartFallStyle = document.createElement('style');
heartFallStyle.textContent = `
    @keyframes heartFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartFallStyle);

// Enhanced confetti with more colors and effects
function createEnhancedConfetti() {
    const confettiCount = 150;
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    
    document.body.appendChild(confettiContainer);
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#ff6b9d', '#c44569'];
    const shapes = ['🎉', '🎊', '🎈', '🎁', '✨', '💫', '🌟', '💎'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '15px';
        confetti.style.height = '15px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `enhancedFall ${Math.random() * 4 + 3}s linear forwards`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiContainer.appendChild(confetti);
    }
    
    // Add shape confetti
    for (let i = 0; i < 30; i++) {
        const shapeConfetti = document.createElement('div');
        shapeConfetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
        shapeConfetti.style.position = 'absolute';
        shapeConfetti.style.fontSize = '1.5rem';
        shapeConfetti.style.left = Math.random() * 100 + '%';
        shapeConfetti.style.top = '-50px';
        shapeConfetti.style.animation = `enhancedFall ${Math.random() * 4 + 3}s linear forwards`;
        
        confettiContainer.appendChild(shapeConfetti);
    }
    
    setTimeout(() => {
        if (confettiContainer.parentNode) {
            confettiContainer.parentNode.removeChild(confettiContainer);
        }
    }, 8000);
}

// Enhanced fall animation
const enhancedFallStyle = document.createElement('style');
enhancedFallStyle.textContent = `
    @keyframes enhancedFall {
        0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(enhancedFallStyle);

// Add interactive click effects
function addInteractiveEffects() {
    // Add click effect for interactive elements
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('wish-card') || 
            e.target.closest('.wish-card') || 
            e.target.classList.contains('letter-container') ||
            e.target.closest('.letter-container') ||
            e.target.classList.contains('video-container') ||
            e.target.closest('.video-container') ||
            e.target.classList.contains('birthday-image') ||
            e.target.closest('.birthday-image')) {
            
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = e.target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            e.target.style.position = 'relative';
            e.target.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
    
    // Add ripple animation CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        const speed = 0.5 + (index * 0.1);
        icon.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add special effect for letter section
            if (entry.target.classList.contains('letter-section')) {
                addSparkles();
            }
        }
    });
}, observerOptions);

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Enhanced confetti on load
    setTimeout(createEnhancedConfetti, 1000);
    
    // Add enhanced floating elements
    enhanceFloatingElements();
    
    // Add interactive effects
    addInteractiveEffects();
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.video-container, .birthday-image, .letter-section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 