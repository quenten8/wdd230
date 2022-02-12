function windChill() {
    let temp = parseFloat(document.getElementById("temp").textContent, 10);
    let speed = parseFloat(document.getElementById("speed").textContent, 10);
    if (temp <= 50 && speed > 3) {
        chill = (35.74+0.6215*temp)-(35.75*Math.pow(speed,0.16))+(0.4275*temp*Math.pow(speed,0.16));
    } else {
        chill = "N/A";
    }
    var chill= Math.round(chill*100)/100;
    document.getElementById("chill").innerHTML= chill;
}