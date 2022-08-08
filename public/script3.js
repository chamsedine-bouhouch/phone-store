var container3 = document.getElementById('contianer-3')
var slider3 = document.getElementById('slider-3');
var slides3 = document.getElementsByClassName('slide-3').length;
var buttons3 = document.getElementsByClassName('btn-3');
var circles = document.getElementsByClassName('index-circle') ;
var index = 0 ;

var currentPosition3 = 0;
var currentMargin3 = 0;
var slidesPerPage3 = 0;


var slidesCount3 = slides3 - slidesPerPage3;
var containerWidth3 = container3.offsetWidth;
var prevKeyActive3 = false;
var nextKeyActive3 = true;

window.addEventListener("resize", checkWidth3);

function checkWidth3() {
    containerWidth3 = container3.offsetWidth;
    setParams3(containerWidth3);
}

function setParams3(w) {
    if (w < 551) {
        slidesPerPage3 = 1;
    } else {
        if (w < 901) {
            slidesPerPage3 = 2;
        } else {
            if (w < 1101) {
                slidesPerPage3 = 3;
            } else {
                slidesPerPage3 = 4;
            }
        }
    }

    slidesCount3 = slides3 - slidesPerPage3;
    if (currentPosition3 > slidesCount3) {
        currentPosition3 -= slidesPerPage3;
    };
    currentMargin3 = - currentPosition3 * (100 / slidesPerPage3);
    slider3.style.marginLeft = currentMargin3 + '%';
    if (currentPosition3 > 0) {
        buttons3[0].classList.remove('inactive');
    }
    if (currentPosition3 < slidesCount3) {
        buttons3[1].classList.remove('inactive');
    }
    if (currentPosition3 >= slidesCount3) {
        buttons3[1].classList.add('inactive');
    }
}

setParams3();

function slideRight3() {
    if (currentPosition3 != 0) {
        slider3.style.marginLeft = currentMargin3 + (100 / slidesPerPage3) + '%';
        currentMargin3 += (100 / slidesPerPage3);
        currentPosition3--;
        circles[index].classList.remove('active-index') ;
        index -- ;
        circles[index].classList.add('active-index')
    };
    if (currentPosition3 === 0) {
        buttons3[0].classList.add('inactive');
    }
    if (currentPosition3 < slidesCount3) {
        buttons3[1].classList.remove('inactive');
    }
};

function slideLeft3() {
    if (currentPosition3 != slidesCount3) {
        slider3.style.marginLeft = currentMargin3 - (100 / slidesPerPage3) + '%';
        currentMargin3 -= (100 / slidesPerPage3);
        currentPosition3++;
        circles[index].classList.remove('active-index') ;
        index ++ ;
        circles[index].classList.add('active-index')
    };
    if (currentPosition3 == slidesCount3) {
        buttons3[1].classList.add('inactive');
    }
    if (currentPosition3 > 0) {
        buttons3[0].classList.remove('inactive');
    }
};