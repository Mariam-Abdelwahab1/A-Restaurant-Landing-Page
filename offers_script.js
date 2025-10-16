document.addEventListener("DOMContentLoaded", function () {
    //Entering fade-in animation
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

    // Countdown timer for first offer
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

    const offerEnd = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
    startCountdown("timer1", offerEnd);
});