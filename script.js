// Hiệu ứng click cho các service items
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
        // Thêm hiệu ứng ripple
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(74, 144, 226, 0.3);
            border-radius: 50%;
            width: 100px;
            height: 100px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Log action (có thể thay thế bằng actual navigation)
        console.log('Clicked:', this.querySelector('.service-text').textContent);
    });
});

// Hiệu ứng hover cho download items
document.querySelectorAll('.download-item').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.querySelector('.download-text span').textContent;
        alert(`Đang chuyển hướng để ${text}...`);
    });
});

// Contact info click handlers
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.querySelector('span').textContent;
        if (text.includes('@')) {
            window.open(`mailto:${text}`, '_blank');
        } else if (text.includes('+84')) {
            window.open(`tel:${text}`, '_blank');
        }
    });
});

// Support và Channel items click handlers
document.querySelectorAll('.support-item, .channel-item').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.querySelector('.support-text, .channel-text').textContent;
        console.log('Clicked support/channel:', text);
        
        // Hiệu ứng pulse
        this.style.animation = 'pulse 0.3s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 300);
    });
});

// Speed links click handlers
document.querySelectorAll('.link-item').forEach(item => {
    item.addEventListener('click', function() {
        const linkText = this.querySelector('span').textContent;
        console.log('Clicked link:', linkText);
        
        // Simulate loading
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang kết nối...';
        
        setTimeout(() => {
            this.innerHTML = originalText;
            alert(`Đã kết nối thành công với ${linkText}!`);
        }, 2000);
    });
});

// Thêm CSS animations động
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .fa-spin {
        animation: fa-spin 1s infinite linear;
    }
    
    @keyframes fa-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Parallax effect cho background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body::before');
    if (parallax) {
        document.body.style.setProperty('--scroll', scrolled * 0.5 + 'px');
    }
});

// Intersection Observer để animate elements khi scroll vào view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe các phần tử cần animate
document.querySelectorAll('.service-item, .ambassador-section, .support-section, .channels-section, .speed-links').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// Thêm fadeInUp animation
const fadeInUpStyle = document.createElement('style');
fadeInUpStyle.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInUpStyle);

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Loading effect khi trang load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Thêm tooltip cho các service items
document.querySelectorAll('.service-item').forEach(item => {
    const text = item.querySelector('.service-text').textContent;
    let tooltipText = '';
    
    switch(text) {
        case 'NẠP - RÚT':
            tooltipText = 'Quản lý nạp tiền và rút tiền';
            break;
        case 'KHUYẾN MÃI':
            tooltipText = 'Xem các chương trình khuyến mãi hot';
            break;
        case 'TÀI KHOẢN':
            tooltipText = 'Quản lý thông tin tài khoản';
            break;
        case 'ĐỔI THÔNG TIN':
            tooltipText = 'Cập nhật thông tin cá nhân';
            break;
        case 'TELEGRAM':
            tooltipText = 'Kết nối qua Telegram';
            break;
        case 'MESSENGER':
            tooltipText = 'Chat qua Facebook Messenger';
            break;
        case 'KHIẾU NẠI':
            tooltipText = 'Gửi khiếu nại và phản hồi';
            break;
        case 'DOWNLOAD':
            tooltipText = 'Tải ứng dụng và tài liệu';
            break;
    }
    
    item.title = tooltipText;
});

console.log('Hi88 Customer Service Center - Website loaded successfully!'); 