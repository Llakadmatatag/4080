// Sidebar Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleSidebar = document.querySelector('.toggle-sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainContent = document.querySelector('.main-content');
    
    // Add pulse animation to toggle button on page load
    if (toggleSidebar) {
        toggleSidebar.classList.add('pulse');
        
        // Remove pulse animation after first interaction
        const removePulse = () => {
            toggleSidebar.classList.remove('pulse');
            toggleSidebar.removeEventListener('click', removePulse);
            toggleSidebar.removeEventListener('mouseover', removePulse);
        };
        
        toggleSidebar.addEventListener('click', removePulse);
        toggleSidebar.addEventListener('mouseover', removePulse);
    }
    
    // Check if sidebar state is saved in localStorage
    const isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    
    // Set initial state
    if (isSidebarCollapsed) {
        document.body.classList.add('sidebar-collapsed');
        if (sidebar) sidebar.classList.add('collapsed');
    } else {
        document.body.classList.remove('sidebar-collapsed');
        if (sidebar) sidebar.classList.remove('collapsed');
    }
    
    // Toggle sidebar on button click
    if (toggleSidebar) {
        toggleSidebar.addEventListener('click', function() {
            const isCollapsed = document.body.classList.toggle('sidebar-collapsed');
            if (sidebar) sidebar.classList.toggle('collapsed');
            // Save state to localStorage
            localStorage.setItem('sidebarCollapsed', isCollapsed);
        });
    }
    
    // Toggle sidebar on mobile menu button click
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInside && window.innerWidth <= 992) {
            sidebar.classList.remove('show');
        }
    });
    
    // Close sidebar when a menu item is clicked on mobile
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('show');
            }
        });
    });
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 992) {
            sidebar.classList.remove('show');
        }
    }
    
    window.addEventListener('resize', handleResize);
});
