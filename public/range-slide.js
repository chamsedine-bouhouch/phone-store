const range = document.querySelectorAll('.range-slider .range');
let progress = document.querySelector('.range-progress');

let gap = 100;

// values 

let minVal = document.querySelector('.min-val');
let maxVal = document.querySelector('.max-val');


minVal.value = range[0].value + '€'
maxVal.value = range[1].value + '€'

range.forEach(input => {
    input.addEventListener('input', e => {
        let minRange = parseInt(range[0].value);
        let maxRange = parseInt(range[1].value);


        if (maxRange - minRange < gap) {
            if (e.target.className === 'range-min') {
                range[0].value = maxRange - gap
            } else {
                range[1].value = maxRange + gap
            }
        } else {
            progress.style.left = (minRange / range[0].max) * 100 + '%'
            progress.style.right = 100 - (maxRange / range[1].max) * 100 + '%'

            minVal.value = minRange + '€'
            maxVal.value = maxRange + '€'
        }
    })
})

