function visitDate() {
    const visited = document.querySelector(".visited");
    let date = new Date().getTime();
    let lastVisited = Number(window.localStorage.getItem("visitedDate"));
    let daysBetween;
    if(lastVisited == 0)
    {
        visited.textContent = "This is your first visit, welcome!";
    }
    else
    {
      if (lastVisited > 86400000)
      {
        visited.textContent = "Welcome back! Your last visit was less than a day ago.";
      }
      else
      {
        daysBetween = Math.round((date - lastVisited) / (1000 * 3600 * 24));
        visited.textContent = "Welcome back! You last visited " + daysBetween + " days ago.";
      }
    }
    localStorage.setItem("visitedDate", date);
}