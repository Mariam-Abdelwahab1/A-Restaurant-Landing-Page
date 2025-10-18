  const slider = document.getElementById('slider');
    const totalSlides = slider.children.length;
    let index = 0;

    function showSlide(i) {
      index = (i + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    // Auto slide every 3 seconds
    let autoSlide = setInterval(nextSlide, 3000);

    // Optional: Pause auto-slide when user interacts (clicks buttons)
    document.querySelector('.prev').addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    document.querySelector('.next').addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 3000);
    }





     // Fade-in on scroll
    const cards = document.querySelectorAll('.offer-card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => {
      observer.observe(card);
    });