function getInsight() {
    const http = new XMLHttpRequest();
    http.open("GET", "https://api.nasa.gov/insight_weather/?api_key=zm1euM14IpjcfgU5JydwjdfVqT5ySIfdOQPGfxXE&feedtype=json&ver=1.0");
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200)
            var res = JSON.parse(this.responseText);
        for (let i = 0; i < res.sol_keys.length; i++) {
            if (res[res.sol_keys[i]].First_UTC.split("T")[0] === document.getElementById("datum_eingabe").value) {
                console.log("Test 2");
                document.getElementById("sol_insight").innerText = res.sol_keys[i];
                document.getElementById("hoechste").innerText = parseInt(((parseFloat(res[res.sol_keys[i]].AT.mx) - 32) / 1.8)) + " °C";
                document.getElementById("niedrigste").innerText = parseInt(((parseFloat(res[res.sol_keys[i]].AT.mn) - 32) / 1.8)) + " °C";
                document.getElementById("speed").innerText = res[res.sol_keys[i]].HWS.av + " m/s";
                document.getElementById("richtung").innerText = res[res.sol_keys[i]].WD.most_common.compass_point;
                return;
            }
        }
        document.getElementById("sol_insight").innerText = "SOL -";
        document.getElementById("hoechste").innerText = "-";
        document.getElementById("niedrigste").innerText = "-";
        document.getElementById("speed").innerText = "-";
        document.getElementById("richtung").innerText = "-";
    }
}

function button(x) {
    const http = new XMLHttpRequest();
    http.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + document.getElementById("datum_eingabe").value + "&api_key=zm1euM14IpjcfgU5JydwjdfVqT5ySIfdOQPGfxXE&camera=" + x +"");
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200)
            var res = JSON.parse(this.responseText);
        document.getElementById("sol_rover").innerText = res.photos[0].sol;
        document.getElementById("foto").src = res.photos[0].img_src;
    }
}

function setDate() {
    document.getElementById("datum1").innerText = "" + document.getElementById("datum_eingabe").value;
    document.getElementById("datum2").innerText = "" + document.getElementById("datum_eingabe").value;
    button("FHAZ");
    getInsight();
}
