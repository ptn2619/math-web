// Hàm đóng/mở dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-container");
    const arrow = document.getElementById("arrow");
    dropdown.classList.toggle("show");
    arrow.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
}

// Xử lý chuyển tab
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // 1. Xóa class active ở tất cả link và tab
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

        // 2. Thêm active vào link vừa nhấn
        this.classList.add('active');

        // 3. Hiển thị tab tương ứng bằng ID
        const targetId = this.getAttribute('data-target');
        const targetTab = document.getElementById(targetId);
        if (targetTab) {
            targetTab.classList.add('active');
            // Cuộn lên đầu trang nội dung
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});
