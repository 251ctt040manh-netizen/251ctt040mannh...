document.addEventListener("DOMContentLoaded", function () {
    
    // --- CHỨC NĂNG 1: Xử lý thông báo kèm lộ trình chi tiết khi nhấn nút Đăng Ký ---
    const registerButtons = document.querySelectorAll(".register-btn");
    
    registerButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Xác định xem nút bấm nằm ở bảng giá hay nằm ở phần khóa học nổi bật
            const isPriceCard = this.closest(".price-card") !== null;
            
            if (isPriceCard) {
                // Nếu click ở khu vực Bảng giá dịch vụ học tập
                const card = this.closest(".price-card");
                const serviceName = card.querySelector(".price-header h3").innerText;
                const servicePrice = card.querySelector(".price-amount").innerText.split('\n')[0];
                
                alert(`🎉 ĐĂNG KÝ DỊCH VỤ THÀNH CÔNG!\n\n📌 Hình thức học: ${serviceName}\n💰 Mức học phí: ${servicePrice}\n\nTrung tâm Alpha đã ghi nhận dữ liệu của bạn và sẽ gọi điện xếp lớp ngay!`);
            } else {
                // Nếu click ở khu vực Khóa học nổi bật
                const courseName = this.parentElement.querySelector("h4").innerText;
                let courseDetail = "";
                
                if (courseName.includes("MOS")) {
                    courseDetail = "- Lộ trình 4 tuần thực chiến chuẩn quốc tế.\n- Học kỹ năng nâng cao Word, Excel, PowerPoint.\n- Tặng miễn phí tài khoản phần mềm luyện đề thi thử.";
                } else if (courseName.includes("Full-Stack")) {
                    courseDetail = "- Lộ trình 6 tháng từ số 0 đến có việc làm.\n- Làm chủ Frontend (HTML, CSS Flexbox/Grid, JS) và cơ sở dữ liệu.";
                } else if (courseName.includes("Đồ Họa")) {
                    courseDetail = "- Lộ trình 2 tháng làm chủ tư duy thiết kế hình ảnh.\n- Thành thạo công cụ xử lý đồ họa chuyên sâu Adobe Photoshop & Illustrator.";
                }
                
                alert(`📚 KHÓA HỌC: ${courseName.toUpperCase()}\n\n🔍 LỘ TRÌNH CHI TIẾT BÊN TRONG:\n${courseDetail}\n\n✔️ Yêu cầu đăng ký khóa học của bạn đã gửi thành công!`);
            }
        });
    });

    // --- CHỨC NĂNG 2: Chuyển đổi giao diện Sáng / Tối mượt mà ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            const currentTheme = document.body.getAttribute("data-theme");
            
            if (currentTheme === "dark") {
                document.body.removeAttribute("data-theme");
                this.innerText = "🌙 Chế độ tối";
            } else {
                document.body.setAttribute("data-theme", "dark");
                this.innerText = "☀️ Chế độ sáng";
            }
        });
    }
});
