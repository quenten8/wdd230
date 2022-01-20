function lastModified() {
  let get = new Date(document.lastModified);
  let month = get.getUTCMonth() + 1;
  let day = get.getUTCDate();
  let year = get.getUTCFullYear();
  let hour = get.getUTCHours();
  let minute = get.getUTCMinutes();
  date = `${month}/${day}/${year} ${hour}:${minute}`;
  document.getElementById("Modified").innerHTML = date;
}