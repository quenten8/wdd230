function lastModified() {
  let get = new Date(document.lastModified);
  let month = get.getUTCMonth() + 1;
  let day = get.getUTCDate();
  let year = get.getUTCFullYear();
  let hour = get.getUTCHours();
  let minute = get.getUTCMinutes();
  let amOrPm = 'am'
  if (hour > 12) {
    amOrPm = 'pm';
    hour = hour - 12;
  }
  date = `${month}/${day}/${year} ${hour}:${minute}${amOrPm}`;
  document.getElementById("Modified").innerHTML = date;
}