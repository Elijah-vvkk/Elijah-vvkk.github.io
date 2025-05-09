// 照片轮播功能
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const prevArea = document.querySelector('.prev-area');
    const nextArea = document.querySelector('.next-area');
    
    // 照片数组
    const photos = [
        'Asset/photo/1.jpg',
        'Asset/photo/2.jpg',
        'Asset/photo/3.jpg',
        // 添加更多照片路径
    ];
    
    let currentIndex = 0;
    
    // 更新照片
    function updatePhoto() {
        const img = galleryContainer.querySelector('img');
        img.style.opacity = '0';
        
        setTimeout(() => {
            img.src = photos[currentIndex];
            img.style.opacity = '1';
        }, 300);
    }
    
    // 上一张照片
    prevArea.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updatePhoto();
    });
    
    // 下一张照片
    nextArea.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % photos.length;
        updatePhoto();
    });
    
    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % photos.length;
        updatePhoto();
    }, 5000);
});

// 模态框功能
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('wechat-modal');
    const wechatTrigger = document.getElementById('wechat-trigger');
    const wechatOfficialTrigger = document.getElementById('wechat-official-trigger');
    const closeBtn = document.querySelector('.close');
    
    // 打开模态框
    function openModal(qrType) {
        const qrImage = modal.querySelector('img');
        qrImage.src = qrType === 'personal' ? 'Asset/wechat-qr.jpg' : 'Asset/wechat-official-qr.jpg';
        modal.style.display = 'block';
    }
    
    // 关闭模态框
    function closeModal() {
        modal.style.display = 'none';
    }
    
    // 事件监听
    wechatTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('personal');
    });
    
    wechatOfficialTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('official');
    });
    
    closeBtn.addEventListener('click', closeModal);
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 