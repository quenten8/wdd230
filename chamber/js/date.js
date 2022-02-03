function getDate() {
  let now = new Date();
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let weekday = days[ now.getDay() ];
  let month = months[ now.getMonth() ];
  let day = now.getDate();
  let year = now.getFullYear();

  d = `${weekday}, ${day} ${month} ${year}`;
  document.getElementById("date").innerHTML = d;

if (weekday != "Monday" && "Tuesday") {
  document.getElementById("banner").style.display = "none"
  }
}