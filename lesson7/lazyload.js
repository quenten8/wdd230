function lazyLoad() {
    const options = {
        threshold: 0.9,
        rootMargin: "0px"
    };
    document.addEventListener("DOMContentLoaded", function() {
        const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.add("loaded");
                observer.unobserve(entry.target);
                }
            })
        }, options);
        const arr = document.querySelectorAll('img.lazy')
        arr.forEach(function(lazyImage) {
        observer.observe(lazyImage);
        })
    })
}