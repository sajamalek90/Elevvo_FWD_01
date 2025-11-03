document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    // Toggle sidebar on button click
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });
    
    // Toggle sidebar on mobile menu button click
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 992) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnMobileBtn = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnMobileBtn && sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
            }
        }
    });
    
    // Add active class to clicked nav items
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('collapsed');
            }
        });
    });
});