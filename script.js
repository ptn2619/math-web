function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-container");
    const arrow = document.getElementById("arrow");
    
    dropdown.classList.toggle("show");
    
    if (arrow) {
        arrow.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
    }
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

        this.classList.add('active');

        const targetId = this.getAttribute('data-target');
        const targetTab = document.getElementById(targetId);
        
        if (targetTab) {
            targetTab.classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        }
    });
});
