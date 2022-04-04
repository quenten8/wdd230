function lastModified() {
  let d = new Date(document.lastModified);
  let date = d.toLocaleString();
  document.getElementById("Modified").innerHTML = date;
}