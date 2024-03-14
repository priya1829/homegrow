//multislider-1
document.addEventListener("DOMContentLoaded", function() {
    var itemsContainer = document.getElementById("MultiCarousel1").querySelector(".MultiCarousel-inner");
    var totalItems = itemsContainer.querySelectorAll(".item").length;
    var currentSlide = 0;
    var slideWidth = 250; 
    var interval = 1000; 
    var autoSlider = setInterval(function() {
        moveSlide(1);
    }, interval);

    function moveSlide(direction) {
        currentSlide = (currentSlide + direction + totalItems) % totalItems;
        itemsContainer.style.transition = "transform 0.5s ease-in-out";
        itemsContainer.style.transform = "translateX(" + (-currentSlide * slideWidth) + "px)";

        if (currentSlide === totalItems - 1) {
            setTimeout(function() {
                itemsContainer.style.transition = "none";
                currentSlide = 0;
                itemsContainer.style.transform = "translateX(0)";
            }, 500);
        }
    }

    itemsContainer.addEventListener("mouseover", function() {
        clearInterval(autoSlider);
    });

    itemsContainer.addEventListener("mouseout", function() {
        autoSlider = setInterval(function() {
            moveSlide(1);
        }, interval);
    });
});



//multislider-2
document.addEventListener('DOMContentLoaded', function () {
    const multiCarousel = document.getElementById('MultiCarousel2');
    const itemsContainer = multiCarousel.querySelector('.MultiCarousel2-inner');
    const leftBtn = multiCarousel.querySelector('.leftLst');
    const rightBtn = multiCarousel.querySelector('.rightLst');
    const itemWidth = 250; // Width of each item, adjust according to your design

    let translateValue = 0;

    leftBtn.addEventListener('click', function () {
        if (translateValue < 0) {
            translateValue += itemWidth;
            itemsContainer.style.transform = `translateX(${translateValue}px)`;
        } else {
            // Move to the end of the carousel
            const totalWidth = itemsContainer.scrollWidth;
            translateValue = -(totalWidth - itemsContainer.offsetWidth);
            itemsContainer.style.transform = `translateX(${translateValue}px)`;
        }
    });

    rightBtn.addEventListener('click', function () {
        const innerWidth = itemsContainer.offsetWidth;
        const totalWidth = itemsContainer.scrollWidth;

        if (translateValue > -(totalWidth - innerWidth)) {
            translateValue -= itemWidth;
            itemsContainer.style.transform = `translateX(${translateValue}px)`;
        } else {
            // Move to the start of the carousel
            translateValue = 0;
            itemsContainer.style.transform = `translateX(${translateValue}px)`;
        }
    });
});


//multislider-3
    document.addEventListener('DOMContentLoaded', function () {
        const multiCarousel = document.getElementById('MultiCarousel3');
        const itemsContainer = multiCarousel.querySelector('.MultiCarousel3-inner');
        const leftBtn = multiCarousel.querySelector('.leftLst');
        const rightBtn = multiCarousel.querySelector('.rightLst');
        const itemWidth = 250; // Width of each item, adjust according to your design
    
        let translateValue = 0;
    
        leftBtn.addEventListener('click', function () {
            if (translateValue < 0) {
                translateValue += itemWidth;
                itemsContainer.style.transform = `translateX(${translateValue}px)`;
            } else {
                // Move to the end of the carousel
                const totalWidth = itemsContainer.scrollWidth;
                translateValue = -(totalWidth - itemsContainer.offsetWidth);
                itemsContainer.style.transform = `translateX(${translateValue}px)`;
            }
        });
    
        rightBtn.addEventListener('click', function () {
            const innerWidth = itemsContainer.offsetWidth;
            const totalWidth = itemsContainer.scrollWidth;
    
            if (translateValue > -(totalWidth - innerWidth)) {
                translateValue -= itemWidth;
                itemsContainer.style.transform = `translateX(${translateValue}px)`;
            } else {
                // Move to the start of the carousel
                translateValue = 0;
                itemsContainer.style.transform = `translateX(${translateValue}px)`;
            }
        });
    });





