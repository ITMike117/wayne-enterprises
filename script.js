document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const mainContent = document.querySelector('main');

    toggleButton.addEventListener('click', () => {
        if (sidebar.style.width === '250px') {
            sidebar.style.width = '0';
            mainContent.style.marginLeft = '0';
        } else {
            sidebar.style.width = '250px';
            mainContent.style.marginLeft = '250px';
        }
    });

    // R&D Access password check
    const rdSubmit = document.getElementById('rd-submit');
    const rdPassword = document.getElementById('rd-password');
    const rdContent = document.getElementById('rd-content');

    rdSubmit.addEventListener('click', () => {
        if (rdPassword.value.toLowerCase() === 'truth') {
            rdContent.style.display = 'block';
        } else {
            alert('Access denied. Incorrect password.');
        }
    });
});