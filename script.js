document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    // 切换侧边栏函数
    function toggleMenu() {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // 点击汉堡按钮
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // 防止冒泡触发document点击
        toggleMenu();
    });

    // 点击遮罩层（页面其他地方）收回侧边栏
    overlay.addEventListener('click', () => {
        toggleMenu();
    });

    // 点击侧边栏内部不关闭，点击外部关闭
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });
});
