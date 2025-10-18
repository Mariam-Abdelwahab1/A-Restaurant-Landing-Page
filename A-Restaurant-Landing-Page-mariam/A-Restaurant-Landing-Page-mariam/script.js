document.addEventListener("DOMContentLoaded", function () {
    // POPUP APPEARING & CLOSING
    // DEFINNING THE POPUP overlay
    const popupOverlay = document.querySelector('.popup-overlay');
    // DEFINNING THE CLOSE BUTTON
    const closeBtn = document.querySelector('.popup-btn');

    // SHOWING THE POPUP WHEN THE PAGE LOADS
    popupOverlay.classList.add('show');

    // REMOVING THE POPUP BY CLICKING ON THE CLOSE BUTTON
    closeBtn.addEventListener('click', () => {
        popupOverlay.classList.remove('show');
    });

    // REMOVING THE POPUP BY CLICKING ON THE BLACK SCREEN BEHIND THE POPUP
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('show');
        }
    });

    // SLIDER
    const sliderImages = document.querySelector('.slider-images');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderDots = document.querySelector('.slider-dots');
    const images = document.querySelectorAll('.slider-images img');
    let counter = 0;

    // A FUNTCION FOR SLIDER MOTION
    function slide() {
        // WE CONSIDER THE WHOLE SLIDER AS A 100%, SO WE DEVIDE IT BY THE IMAGES LENGTH - NUMBER OF IMAGES USED FOR THE HERO SECTION - and use CSS transform to shift the slider horizontally.
        // This creates a smooth sliding effect between images. 
        const imageWidthPercentage = 100 / images.length;
        //USING CSS transform to shift the slider horizontally
        sliderImages.style.transform = `translateX(-${counter * imageWidthPercentage}%)`;
    }

    // UPDATING SLIDER POINTS
    function updateDots() {
        const dots = document.querySelectorAll('.slider-dots span');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots.length > 0) {
            dots[counter].classList.add('active');
        }
    }

    // CREATING SLIDER DOTS DYNAMICALLY
    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => {
            counter = index;
            slide();
            updateDots();
        });
        sliderDots.appendChild(dot);
    });

    // ACTIVATING THE FIRST DOT AT THE BEGINNING
    const dots = document.querySelectorAll('.slider-dots span');
    if (dots.length > 0) {
        dots[0].classList.add('active');
    }

    // SLIDER CONTROL BUTTONS AND THEIR ACTIONS
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

    // ACTIVATING THE SLIDER AUTOMATICALLY
    setInterval(() => {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        slide();
        updateDots();
    }, 3000); // CHANGING THE IMAGE EACH 3 SECONDS

    // OFFERS that FADE-IN, and a TIMER for one Offer
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    fadeElements.forEach(el => observer.observe(el));

    // COUNTDOWN TIMER for the Offer
    function startCountdown(elementId, endTime) {
        const timer = document.getElementById(elementId);
        function updateTimer() {
            const now = new Date().getTime();
            const distance = endTime - now;
            if (distance < 0) {
                timer.innerHTML = "Offer expired";
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timer.innerHTML = `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            setTimeout(updateTimer, 1000);
        }
        updateTimer();
    }

    const offerEnd = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3 DAYS FROM NOW
    startCountdown("timer1", offerEnd);
});


const countDown = new Date("2025-10-20T16:17:00").getTime();


var x = setInterval(()=>{

  
  var now = new Date().getTime();

 
  var distance =countDown - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = String(days).padStart(2, '0');
document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

countDown.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    countDown.innerHTML = "EXPIRED";
  }
}, 1000);

