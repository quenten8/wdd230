function visitCounter() {
    const visits = document.querySelector(".visited");
    let visitsNumber = Number(window.localStorage.getItem("visits"));
    if (visitsNumber == 0) {
        visits.textContent = "This is your first visit, welcome!";
    } else {
        visits.textContent = "Welcome back! You've visited " + visitsNumber + " times.";
    }
    visitsNumber++;
    localStorage.setItem("visits", visitsNumber);
    
}