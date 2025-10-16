const sliderImages = document.querySelector('.slider-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderDots = document.querySelector('.slider-dots');
const images = document.querySelectorAll('.slider-images img');
let counter = 0;

// إنشاء نقاط السلايدر
images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
        counter = index;
        slide();
        updateDots();
    });
    sliderDots.appendChild(dot);
});

// تفعيل أول نقطة
const dots = document.querySelectorAll('.slider-dots span');
dots[0].classList.add('active');

// دالة تحريك السلايدر
function slide() {
    sliderImages.style.transform = `translateX(-${counter * 20}%)`;
}

// دالة تحديث النقاط
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// أزرار التحكم
prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }
    slide();
    updateDots();
});

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    slide();
    updateDots();
});

// تشغيل السلايدر تلقائيًا
setInterval(() => {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    slide();
    updateDots();
}, 3000); // تغيير الصورة كل 3 ثواني

// ... (باقي الكود زي ما هو)

// دالة تحريك السلايدر
function slide() {
    // بما إن الصورة الواحدة واخدة 20% من عرض الشريط كله،
    // يبقى لازم نحرك الشريط 20% في كل مرة عشان نجيب الصورة اللي بعدها.
    sliderImages.style.transform = `translateX(-${counter * 20}%)`;
}

// ... (باقي الكود زي ما هو)