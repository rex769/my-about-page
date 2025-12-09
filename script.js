document.addEventListener("DOMContentLoaded", function() {
    console.log("Player 1 Profile Loaded successfully.");

    // 簡單的 Intersection Observer 來觸發進度條動畫
    const skillSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress-bar-fill');

    if (skillSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 當技能區塊進入畫面時，將寬度設定為 data-width 的值
                    progressBars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-width');
                        bar.style.width = targetWidth;
                    });
                    // 動畫觸發後取消觀察 (只跑一次)
                    observer.unobserve(skillSection);
                }
            });
        }, { threshold: 0.2 }); // 看到 20% 的區塊就觸發

        observer.observe(skillSection);
    }
});