
const allCards = document.querySelectorAll('.card');
const projectCards = document.querySelectorAll('.project-card')
const sliderImages = document.querySelectorAll('.slider-image')


console.log("observing...")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('appear', entry.isIntersecting)
            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
            }
        }
        )},
    {
        threshold: 0.4,
    } 
)

allCards.forEach(card => {
    observer.observe(card)
})