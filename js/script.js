// carousel images

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    const prevButton = document.querySelector('.carousel .prev');
    const nextButton = document.querySelector('.carousel .next');
    let currentIndex = 0;
    const intervalTime = 10000; // Thời gian chuyển đổi (ms), ở đây là 10 giây
    let carouselInterval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function startCarousel() {
        carouselInterval = setInterval(() => {
            nextImage();
        }, intervalTime);
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    // Sự kiện cho nút Prev và Next
    prevButton.addEventListener('click', () => {
        prevImage();
        // Reset lại interval khi người dùng tự chuyển ảnh
        stopCarousel();
        startCarousel();
    });

    nextButton.addEventListener('click', () => {
        nextImage();
        // Reset lại interval khi người dùng tự chuyển ảnh
        stopCarousel();
        startCarousel();
    });

    // Khởi động carousel tự động
    startCarousel();

    // Tùy chọn: Tạm dừng carousel khi di chuột qua và tiếp tục khi ra
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseover', stopCarousel);
    carousel.addEventListener('mouseout', startCarousel);
});

// toggle icon responsive 
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navbarCollapse = document.getElementById('navbarCollapse');
    const navBurger = document.querySelector('.nav-burger');
    const navClose = document.querySelector('.nav-close');

    navToggle.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show'); // Toggle the Bootstrap collapse class
        navBurger.classList.toggle('d-none'); // Toggle visibility of the burger icon
        navClose.classList.toggle('d-none'); // Toggle visibility of the close icon
    });
});



