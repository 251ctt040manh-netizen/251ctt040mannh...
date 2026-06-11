const darkBtn = document.querySelector('#dark-mode-btn');
const regBtns = document.querySelectorAll('.register-btn');

if (darkBtn) {
    darkBtn.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
}

regBtns.forEach(btn => {
    btn.addEventListener('click', () => alert('Đăng ký khóa học thành công!'));
});

