function lastModified() {
  var get = new Date(document.lastModified);
  var month = get.getUTCMonth() + 1; //months from 1-12
  var day = get.getUTCDate();
  var year = get.getUTCFullYear();
  var hour = get.getUTCHours();
  var minute = get.getUTCMinutes();
  date = month + "/" + day + "/" + year + "  " + hour + ":" + minute;
  document.getElementById("Modified").innerHTML = date;
}