var container1 = document.getElementById('contianer-1')
var slider1 = document.getElementById('slider-1');
var slides1 = document.getElementsByClassName('slide-1').length;
var buttons1 = document.getElementsByClassName('btn-1');


var currentPosition1 = 0;
var currentMargin1 = 0;
var slidesPerPage1 = 0;


var slidesCount1 = slides1 - slidesPerPage1;
var containerWidth1 = container1.offsetWidth;
var prevKeyActive1 = false;
var nextKeyActive1 = true;

window.addEventListener("resize", checkWidth1);

function checkWidth1() {
    containerWidth1 = container1.offsetWidth;
    setParams1(containerWidth1);
}

function setParams1(w) {
    if (w < 551) {
        slidesPerPage1 = 1;
    } else {
        if (w < 901) {
            slidesPerPage1 = 2;
        } else {
            if (w < 1101) {
                slidesPerPage1 = 3;
            } else {
                slidesPerPage1 = 4;
            }
        }
    }

    slidesCount1 = slides1 - slidesPerPage1;
    if (currentPosition1 > slidesCount1) {
        currentPosition1 -= slidesPerPage1;
    };
    currentMargin1 = - currentPosition1 * (100 / slidesPerPage1);
    slider1.style.marginLeft = currentMargin1 + '%';
    if (currentPosition1 > 0) {
        buttons1[0].classList.remove('inactive');
    }
    if (currentPosition1 < slidesCount1) {
        buttons1[1].classList.remove('inactive');
    }
    if (currentPosition1 >= slidesCount1) {
        buttons1[1].classList.add('inactive');
    }
}

setParams1();

function slideRight1() {
    if (currentPosition1 != 0) {
        slider1.style.marginLeft = currentMargin1 + (100 / slidesPerPage1) + '%';
        currentMargin1 += (100 / slidesPerPage1);
        currentPosition1--;
    };
    if (currentPosition1 === 0) {
        buttons1[0].classList.add('inactive');
    }
    if (currentPosition1 < slidesCount1) {
        buttons1[1].classList.remove('inactive');
    }
};

function slideLeft1() {
    if (currentPosition1 != slidesCount1) {
        slider1.style.marginLeft = currentMargin1 - (100 / slidesPerPage1) + '%';
        currentMargin1 -= (100 / slidesPerPage1);
        currentPosition1++;
    };
    if (currentPosition1 == slidesCount1) {
        buttons1[1].classList.add('inactive');
    }
    if (currentPosition1 > 0) {
        buttons1[0].classList.remove('inactive');
    }
};