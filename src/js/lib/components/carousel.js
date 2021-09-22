import $ from '../core';

$.prototype.carousel = function(autoPlay = false) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        const prev = $(this[i].querySelector('[data-slide="prev"]'));
        const next = $(this[i].querySelector('[data-slide="next"]'));

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        const nextSlide = function () {
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            slidesField.style.transition = '0.5s all';

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }

        next.click((e) => {
            e.preventDefault();
            nextSlide();
        });

        prev.click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1)
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        if (autoPlay) {
            let paused = setInterval(() => nextSlide(), 5000);

            slides.forEach(slide => {
                slide.addEventListener('mouseenter', () => {
                    clearInterval(paused);
                });
                slide.addEventListener('mouseleave', () => {
                    paused = setInterval(() => nextSlide(), 5000);
                });
            });

            prev.on('mouseenter', () => {
                clearInterval(paused);
            });
            prev.on('mouseleave', () => {
                paused = setInterval(() => nextSlide(), 5000);
            });

            next.on('mouseenter', () => {
                clearInterval(paused);
            });
            next.on('mouseleave', () => {
                paused = setInterval(() => nextSlide(), 5000);
            });
        }
    }
};

$.prototype.createCarousel = function({carousel, needDots = true}) {
    for (let i = 0; i < this.length; i++) {
        const carouselBlock = this[i].querySelector(carousel),
              dotsContainer = document.createElement('ol'),
              next = document.createElement('a'),
              prev = document.createElement('a'),
              spanPrev = document.createElement('span'),
              spanNext = document.createElement('span');
        let slides = this[i].querySelectorAll('.carousel-item'),
            dot;

        if (needDots) {
            dotsContainer.classList.add('carousel-indicators');
        
            for (let j = 0; j < slides.length; j++) {
                dot = document.createElement('li');

                if (j == 0) {
                    dot.classList.add('active');
                }
                
                dot.setAttribute('data-slide-to', `${j}`);
                dotsContainer.append(dot);
            }
        
            carouselBlock.parentNode.prepend(dotsContainer);
        }

        prev.setAttribute('data-slide', 'prev');
        prev.setAttribute('href', '#');
        prev.classList.add('carousel-prev');

        spanPrev.innerHTML = '&lt;';
        spanPrev.classList.add('carousel-prev-icon');
        prev.append(spanPrev);

        next.setAttribute('data-slide', 'next');
        next.setAttribute('href', '#');
        next.classList.add('carousel-next');

        spanNext.innerHTML = '&gt;';
        spanNext.classList.add('carousel-next-icon');
        next.append(spanNext);

        carouselBlock.parentNode.append(prev);
        carouselBlock.parentNode.append(next);
    }
};

$('.carousel').createCarousel({
    carousel: '.carousel-inner', 
    needDots: true
});

$('.carousel').carousel(true);