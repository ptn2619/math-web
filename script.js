// 1. Hàm đóng/mở dropdown menu (Cấp chương)
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-container");
    const arrow = document.getElementById("arrow");
    
    dropdown.classList.toggle("show");
    
    // Xoay mũi tên khi đóng/mở
    if (arrow) {
        arrow.style.transform = dropdown.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
    }
}

// 2. Hàm đóng/mở Sidebar (Trên điện thoại)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// 3. Xử lý Chuyển Tab và Tự động đóng Menu Mobile
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // --- XỬ LÝ CHUYỂN TAB ---
        // Xóa class active ở tất cả link và các section nội dung
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

        // Thêm active vào link vừa nhấn
        this.classList.add('active');

        // Hiển thị tab tương ứng bằng ID lấy từ data-target
        const targetId = this.getAttribute('data-target');
        const targetTab = document.getElementById(targetId);
        
        if (targetTab) {
            targetTab.classList.add('active');
            // Cuộn lên đầu trang nội dung mượt mà
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- XỬ LÝ TRÊN MOBILE ---
        // Nếu đang ở màn hình nhỏ, tự động thu hồi Sidebar sau khi chọn bài
        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        }
    });
});
