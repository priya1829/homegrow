document.addEventListener("DOMContentLoaded", function() {
    var itemsContainer = document.getElementById("MultiCarousel1").querySelector(".MultiCarousel-inner");
    var totalItems = itemsContainer.querySelectorAll(".item").length;
    var currentSlide = 0;
    var slideWidth = 250; // Width of each slide
    var interval = 1000; // Change slide every 3 seconds

    var autoSlider = setInterval(function() {
        moveSlide(1);
    }, interval);

    function moveSlide(direction) {
        currentSlide = (currentSlide + direction + totalItems) % totalItems;
        itemsContainer.style.transition = "transform 0.5s ease-in-out";
        itemsContainer.style.transform = "translateX(" + (-currentSlide * slideWidth) + "px)";

        // Check if reached the last slide, then reset to the first slide
        if (currentSlide === totalItems - 1) {
            setTimeout(function() {
                itemsContainer.style.transition = "none";
                currentSlide = 0;
                itemsContainer.style.transform = "translateX(0)";
            }, 500); // Wait for transition to complete before resetting
        }
    }

    // Pause slider on mouseover
    itemsContainer.addEventListener("mouseover", function() {
        clearInterval(autoSlider);
    });

    // Resume slider on mouseout
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

//Form js
   // Show email form when "Using Email?" link is clicked
   document.getElementById("showEmailForm").addEventListener("click", function () {
    document.getElementById("mobileForm").style.display = "none";
    document.getElementById("emailForm").style.display = "block";
});

// Show email form when "Using Email?" link is clicked
document.getElementById("showMobileForm").addEventListener("click", function () {
    document.getElementById("mobileForm").style.display = "block";
    document.getElementById("emailForm").style.display = "none";
});

// Simulate OTP verification (you can replace this with your actual logic)
document.getElementById("submitMobile").addEventListener("click", function () {
    document.getElementById("mobileForm").style.display = "none";
    document.getElementById("otpForm").style.display = "block";
});

// Simulate OTP verification (you can replace this with your actual logic)
document.getElementById("submitEmail").addEventListener("click", function () {
    document.getElementById("emailForm").style.display = "none";
    document.getElementById("otpForm").style.display = "block";
});

// Verify OTP (you can replace this with your actual logic)
document.getElementById("verifyOTP").addEventListener("click", function () {
    alert("OTP verified successfully!");
});

document.addEventListener("DOMContentLoaded", function (event) {

    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
    } OTPInput();
});