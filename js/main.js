// carousel images

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    const prevButton = document.querySelector('.carousel .prev');
    const nextButton = document.querySelector('.carousel .next');
    let currentIndex = 0;
    const intervalTime = 5000; // Thời gian chuyển đổi (ms)
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
        stopCarousel();
        startCarousel();
    });

    nextButton.addEventListener('click', () => {
        nextImage();
        stopCarousel();
        startCarousel();
    });

    // Khởi động carousel tự động
    startCarousel();

    // Tạm dừng carousel khi di chuột qua và tiếp tục khi ra
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

// find product
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".search-box button");
    const searchBox = document.querySelector(".search-box input");
    const products = document.querySelectorAll("#list-product-season .card, #list-product-cut .card, #list-product-gift .card, #list-product-everyday .card");

    // Hàm khôi phục độ sáng cho tất cả sản phẩm
    function resetProductOpacity() {
        products.forEach(product => product.style.opacity = "1");
    }

    // Lắng nghe sự kiện nhấn nút "Tìm kiếm"
    searchButton.addEventListener("click", function() {
        const searchQuery = searchBox.value.toLowerCase();
        
        let firstMatch = null; // Biến lưu trữ sản phẩm đầu tiên khớp từ khóa
        products.forEach(product => {
            const productName = product.querySelector(".card-title").textContent.toLowerCase();
            if (productName.includes(searchQuery)) {
                product.style.opacity = "1"; // Làm nổi bật sản phẩm khớp
                if (!firstMatch) {
                    firstMatch = product; // Lưu trữ sản phẩm đầu tiên tìm thấy
                }
            } else {
                product.style.opacity = "0.5"; // Làm mờ sản phẩm không khớp
            }
        });
        
        // Cuộn đến sản phẩm đầu tiên khớp từ khóa
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            alert("Không tìm thấy sản phẩm phù hợp!");
            resetProductOpacity(); // Khôi phục độ sáng nếu không tìm thấy
        }
    });

    // Lắng nghe sự kiện nhấp chuột ra ngoài thanh tìm kiếm và các sản phẩm để khôi phục độ sáng
    document.addEventListener("click", function(event) {
        const isClickOutside = !event.target.closest(".card") && !event.target.closest(".search-box");
        if (isClickOutside) {
            resetProductOpacity(); // Khôi phục độ sáng cho tất cả sản phẩm
            searchBox.value = ""; // Xóa nội dung tìm kiếm
        }
    });
});


