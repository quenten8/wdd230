function year() {
    const y = new Date();
    document.querySelector("#year").innerHTML = y.getFullYear();
   }