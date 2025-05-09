// 照片轮播功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取主图、左右卡片、模糊背景元素
    const mainImg = document.querySelector('.main-image');
    const leftImg = document.querySelector('.left-image');
    const rightImg = document.querySelector('.right-image');
    const bgLeft = document.querySelector('.gallery-bg-left');
    const bgRight = document.querySelector('.gallery-bg-right');
    const prevArea = document.querySelector('.prev-area');
    const nextArea = document.querySelector('.next-area');
    
    // 照片数组
    const photos = [
        'Asset/photo/photo1.jpg',
        'Asset/photo/photo2.jpg',
        'Asset/photo/photo3.jpg',
        'Asset/photo/photo4.jpg',
        'Asset/photo/photo5.jpg',
        'Asset/photo/photo6.jpg',
        'Asset/photo/photo7.jpg',
    ];
    
    let currentIndex = 0;
    let isAnimating = false; // 动画进行中标志，防止多次点击
    
    // 更新所有图片和背景
    function updateGallery() {
        // 主图
        mainImg.src = photos[currentIndex];
        // 左侧卡片（上一张）
        leftImg.src = photos[(currentIndex - 1 + photos.length) % photos.length];
        // 右侧卡片（下一张）
        rightImg.src = photos[(currentIndex + 1) % photos.length];
        // 左侧模糊背景（上一张）
        bgLeft.style.backgroundImage = `url('${photos[(currentIndex - 1 + photos.length) % photos.length]}')`;
        // 右侧模糊背景（下一张）
        bgRight.style.backgroundImage = `url('${photos[(currentIndex + 1) % photos.length]}')`;

        // 针对photo2.jpg展示中间部分，其余展示下半部分
        if (photos[currentIndex].includes('photo2.jpg')) {
            mainImg.classList.add('centered-image');
        } else {
            mainImg.classList.remove('centered-image');
        }
    }
    
    // 动画切换到下一张
    function slideToNext() {
        if (isAnimating) return;
        isAnimating = true;
        // 添加动画类
        mainImg.classList.add('slide-next');
        leftImg.classList.add('slide-next');
        rightImg.classList.add('slide-next');
        // 动画结束后切换图片
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % photos.length;
            updateGallery();
            // 移除动画类，重置位置
            mainImg.classList.remove('slide-next');
            leftImg.classList.remove('slide-next');
            rightImg.classList.remove('slide-next');
            isAnimating = false;
        }, 500); // 动画时长与CSS一致
    }
    
    // 动画切换到上一张
    function slideToPrev() {
        if (isAnimating) return;
        isAnimating = true;
        // 添加动画类
        mainImg.classList.add('slide-prev');
        leftImg.classList.add('slide-prev');
        rightImg.classList.add('slide-prev');
        // 动画结束后切换图片
        setTimeout(() => {
            currentIndex = (currentIndex - 1 + photos.length) % photos.length;
            updateGallery();
            // 移除动画类，重置位置
            mainImg.classList.remove('slide-prev');
            leftImg.classList.remove('slide-prev');
            rightImg.classList.remove('slide-prev');
            isAnimating = false;
        }, 500);
    }
    
    // 绑定点击事件
    prevArea.addEventListener('click', slideToPrev);
    nextArea.addEventListener('click', slideToNext);
    
    // 自动轮播（可选）
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % photos.length;
    //     updateGallery();
    // }, 5000);

    // 初始化
    updateGallery();
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