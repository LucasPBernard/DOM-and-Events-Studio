// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function() {
    let flightStatus = document.getElementById("flightStatus")
    let bgflightScreen = document.getElementById("shuttleBackground")
    let shuttleHeight = document.getElementById("spaceShuttleHeight")
    let takeoffButton = document.getElementById("takeoff")
    let shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if (shuttleReady) {
        flightStatus.innerText = "Shuttle in flight.";
        bgflightScreen.style.backgroundColor = "blue";
        shuttleHeight.innerText = "10000";
    }
})

let landingBtn = document.getElementById("landing")
landingBtn.addEventListener('click', function() {
    window.alert("The shuttle is landing. Landing gear engaged.")

    let flightStatus = document.getElementById("flightstatus")
    flightStatus.innerText = "The shuttle has landed."

    let shuttleFlightScreen = document.getElementById("shuttleBackground")
    shuttleFlightScreen.setAttribute("style", "background-color: #00FF00")

    let shuttleHeight = document.getElementById("spaceShuttleHeight")
    shuttleHeight.innertext = "0"
})  
