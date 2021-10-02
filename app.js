const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    
    slide.addEventListener('click', (e) => {
        clearActiveClasses();
        slide.classList.add('active')
    })
})

function clearActiveClasses () {
    slides.forEach(slide => {
         slide.classList.remove('active')
    });
}


function sum(a, b) {
    return this.a = a; // => true
 }


console.log(sum(3, 6));




