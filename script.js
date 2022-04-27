const counterItems = document.querySelectorAll('.counter')
const counterBox = document.querySelector('.counter-box')


const options = {
    rootMargin: '-250px'
}

const startCounter = entry => {
    
}


const observer = new IntersectionObserver(startCounter, options)
observer.observe(counterBox)